import React from 'react';
import classes from './ViewCity.module.css';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import { Container, Row, Col, Form, FormGroup, Label, Input, Badge } from 'reactstrap';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../Footer/Footer';
import DataTable from 'react-data-table-component';
import { listData } from '../../util/commonUtil';
import { connect } from 'react-redux';
import { getAllCountries } from '../../redux/actions/country/getAndDeleteCountry';
import { getAllStates } from '../../redux/actions/state/getAndDeleteState';
import {
    getAllCities,
    deleteCity
} from '../../redux/actions/city/getAndDeleteCity';
const customStyles = {
    headCells: {
        style: {
            fontWeight: 'bold',
            fontSize: '15px'
        },
    },
    cells: {
        style: {
            fontSize: '15px'
        },
    },
};
class ViewCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryId: '',
            stateId: '',
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
            stateId: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.getAllCities(this.state.countryId, this.state.stateId)
        setTimeout(() => {
            this.setState({
                ...this.state,
                cities: this.props.cities
            })
        }, 1000);
    }

    deleteHandler = (cityId) => {
        this.props.deleteCity(this.state.countryId, this.state.stateId, cityId);
        setTimeout(() => {
            this.setState({
                ...this.state,
                cities: this.props.cities
            })
        }, 1000);
    }

    render() {
        const { countryId, stateId } = this.state;
        var columns = [
            {
                name: 'City ID',
                selector: 'id',
                sortable: true
            },
            {
                name: 'City Name',
                selector: 'name',
                sortable: true
            },
            {
                name: 'Delete',
                cell: row => <Badge color="danger" className={classes.Badge} onClick={() => this.deleteHandler(row.id)}><FontAwesomeIcon icon="trash-alt" /></Badge>
            },
        ];
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
                        <DashboardPage icon="university" name="View City Details" />
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
                                        <Input type="select" id="country" name="country" onChange={this.countryChangeHandler} value={countryId} required>
                                            <option value="">Select Country</option>
                                            {listData(this.props.countries)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="state" className={classes.Label}>State Name</Label>
                                        <Input type="select" id="state" name="state" onChange={this.changeHandler} value={stateId} required>
                                            <option value="">Select State</option>
                                            {listData(this.props.states)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="View Cities" className="btn btn-danger" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col xs="6">
                                <div className={classes.Main}>
                                    <DataTable
                                        noHeader={true}
                                        striped={true}
                                        columns={columns}
                                        data={this.state.cities}
                                        pagination
                                        paginationPerPage={5}
                                        pointerOnHover={true}
                                        paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
                                        customStyles={customStyles}
                                    />
                                </div>
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
        cities: state.getAndDeleteCity.cities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries()),
        getAllStates: (countryId) => dispatch(getAllStates(countryId)),
        getAllCities: (countryId, stateId) => dispatch(getAllCities(countryId, stateId)),
        deleteCity: (countryId, stateId, cityId) => dispatch(deleteCity(countryId, stateId, cityId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCity);