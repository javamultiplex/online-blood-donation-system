import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Footer from '../../Footer/Footer';
import {
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Form,
    Table,
    Button
} from 'reactstrap';
import classes from './AddCity.module.css';
import { connect } from 'react-redux';
import { listData } from '../../util/commonUtil';
import { getAllCountries } from '../../redux/actions/country/getAndDeleteCountry';
import { getAllStates } from '../../redux/actions/state/getAndDeleteState';
import { addCity } from '../../redux/actions/city/addCity';
class AddCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryId: '',
            stateId: '',
            cityName: '',
            cities: []
        }
    }

    componentDidMount() {
        this.props.getAllCountries();
    }

    countryChangeHandler = (event) => {
        const countryId = event.target.value;
        this.props.getAllStates(countryId);
        this.setState({
            ...this.state,
            countryId: countryId
        });
    }

    changeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addCity(this.state.countryId, this.state.stateId, {
            'name': this.state.cityName
        })
        setTimeout(() => {
            this.setState({
                ...this.state,
                cities: this.state.cities.concat({
                    'name': this.props.city.name,
                    'countryName': this.props.city.state.country.name,
                    'stateName': this.props.city.state.name
                })
            })
        }, 1000);
        this.reset();
    }

    reset = () => {
        this.setState({
            countryId: '',
            stateId: '',
            cityName: ''
        })
    }

    render() {
        const { countryId, stateId, cityName } = this.state;
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
                        <DashboardPage icon="university" name="Add City" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <Row>
                            <Col xs="6">
                                <Form className={classes.Form} onSubmit={this.submitHandler}>
                                    <FormGroup>
                                        <Label for="country" className={classes.Label}>Country Name</Label>
                                        <Input type="select" id="country" name="countryId" onChange={this.countryChangeHandler} value={countryId} required>
                                            <option value="">Select Country</option>
                                            {listData(this.props.countries)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="state" className={classes.Label}>State Name</Label>
                                        <Input type="select" id="state" name="stateId" onChange={this.changeHandler} value={stateId} required>
                                            <option value="">Select State</option>
                                            {listData(this.props.states)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="city" className={classes.Label}>City Name</Label>
                                        <Input type="text" id="city" name="cityName" onChange={this.changeHandler} value={cityName} required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="Add City" className="btn btn-danger" />
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
                                            <th>City</th>
                                        </tr>
                                        {
                                            this.state.cities.map((city, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{city.countryName}</td>
                                                    <td>{city.stateName}</td>
                                                    <td>{city.name}</td>
                                                </tr>))
                                        }
                                    </tbody>
                                </Table>
                                <Button
                                    color="danger"
                                    onClick={() => this.props.history.push('/admin/view-city')}>View All</Button>
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
        states: state.getAndDeleteState.states,
        city: state.addCity.city
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries()),
        getAllStates: (countryId) => dispatch(getAllStates(countryId)),
        addCity: (countryId, stateId, city) => dispatch(addCity(countryId, stateId, city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);