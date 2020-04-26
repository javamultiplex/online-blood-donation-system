import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import Footer from '../../Footer/Footer';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import classes from './AddArea.module.css';
import { connect } from 'react-redux';
import { listData } from '../../util/commonUtil';
import { getAllCountries } from '../../redux/actions/country/getAndDeleteCountry';
import { getAllStates } from '../../redux/actions/state/getAndDeleteState';
import { getAllCities } from '../../redux/actions/city/getAndDeleteCity';
import { addArea } from '../../redux/actions/area/addArea';
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

class AddArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryId: '',
            stateId: '',
            cityId: '',
            areaName: '',
            areas: []
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
        })
    }

    stateChangeHandler = (event) => {
        const stateId = event.target.value;
        this.props.getAllCities(this.state.countryId, stateId);
        this.setState({
            ...this.state,
            stateId: stateId
        })
    }

    changeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addArea(this.state.countryId, this.state.stateId, this.state.cityId, {
            name: this.state.areaName
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                areas: this.state.areas.concat(
                    {
                        name: this.props.area.name,
                        cityName: this.props.area.city.name,
                        stateName: this.props.area.city.state.name,
                        countryName: this.props.area.city.state.country.name
                    }
                )
            })
        }, 1000);
        this.reset();
    }

    reset = () => {
        this.setState({
            ...this.state,
            countryId: '',
            stateId: '',
            cityId: '',
            areaName: ''
        });
    }

    render() {
        const { countryId, stateId, cityId, areaName } = this.state;
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
                        <DashboardPage icon="university" name="Add Area" />
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
                                        <Input type="select" id="state" name="stateId" onChange={this.stateChangeHandler} value={stateId} required>
                                            <option value="">Select State</option>
                                            {listData(this.props.states)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="city" className={classes.Label}>City Name</Label>
                                        <Input type="select" id="city" name="cityId" onChange={this.changeHandler} value={cityId} required>
                                            <option value="">Select City</option>
                                            {listData(this.props.cities)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="area" className={classes.Label}>Area Name</Label>
                                        <Input type="text" id="area" name="areaName" onChange={this.changeHandler} value={areaName} required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="Add Area" className="btn btn-danger" />
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
                                            <th>Area</th>
                                        </tr>  
                                        {
                                            this.state.areas.map((area,index) =>(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{area.countryName}</td>
                                                    <td>{area.stateName}</td>
                                                    <td>{area.cityName}</td>
                                                    <td>{area.name}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                                <Button
                                    color="danger"
                                    onClick={() => this.props.history.push('/admin/view-area')}>View All</Button>
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
        cities: state.getAndDeleteCity.cities,
        area: state.addArea.area
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries()),
        getAllStates: (countryId) => dispatch(getAllStates(countryId)),
        getAllCities: (countryId, stateId) => dispatch(getAllCities(countryId, stateId)),
        addArea: (countryId, stateId, cityId, area) => dispatch(addArea(countryId, stateId, cityId, area))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArea);