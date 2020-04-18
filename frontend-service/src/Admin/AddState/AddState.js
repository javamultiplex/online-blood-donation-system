import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import Footer from '../../Footer/Footer';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Table,
    Button
} from 'reactstrap';
import classes from './AddState.module.css';
import { connect } from 'react-redux';
import { getAllCountries } from '../../redux/actions/country/getAndDeleteCountry';
import { addState } from '../../redux/actions/state/addState';
class AddState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryId: '',
            stateName: '',
            states: []
        }
    }

    componentDidMount() {
        this.props.getAllCountries();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addState(this.state.countryId, {
            'name': this.state.stateName
        });
        setTimeout(()=>{
            this.setState({
                ...this.state,
                states: this.state.states.concat({
                    name: this.props.output.name,
                    countryName: this.props.output.country.name
                })
            })
        },1000);
        
        this.reset();
    }

    reset = () => {
        this.setState({
            stateName: '',
            countryId: ''
        })
    }

    changeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { countryId, stateName } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <AdminTopNavigation />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <Dashboard />
                    </Col>
                    <Col xs="9">
                        <DashboardPage icon="university" name="Add State" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <Row>
                            <Col xs="6">
                                <Form className={classes.Page} onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label for="country" className={classes.Label}>Country Name</Label>
                                        <Input type="select" name="countryId" id="country" onChange={this.changeHandler} value={countryId} required>
                                            <option value="">Select Country</option>
                                            {
                                                this.props.countries.map((country, index) =>
                                                    <option key={index} value={country.id}>{country.name}</option>)
                                            }
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="state" className={classes.Label}>State Name</Label>
                                        <Input type="text" name="stateName" id="state" onChange={this.changeHandler} value={stateName} required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" className="btn btn-danger" value="Add State" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col xs="6">
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Country</th>
                                            <th>State</th>
                                        </tr>
                                        {
                                            this.state.states.map((s, index) => (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{s.countryName}</td>
                                                    <td>{s.name}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                                <Button
                                    color="danger"
                                    onClick={() => this.props.history.push('/admin/view-state')}
                                    className={classes.Button}>
                                    View All
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.getAndDeleteCountry.countries,
        output: state.addState.output
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries()),
        addState: (countryId, state) => dispatch(addState(countryId, state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddState);