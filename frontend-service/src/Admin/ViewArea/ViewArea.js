import React from 'react';
import classes from './ViewArea.module.css';
import { Container, Row, Col, Label, Input, FormGroup, Form, Badge } from 'reactstrap';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Footer from '../../Footer/Footer';
import DashboardPage from '../DashboardPage/DashboardPage';
import Dashboard from '../Dashboard/Dashboard';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DataTable from 'react-data-table-component';
import { getAllCountries } from '../../redux/actions/country/getAndDeleteCountry';
import { getAllStates } from '../../redux/actions/state/getAndDeleteState';
import { getAllCities } from '../../redux/actions/city/getAndDeleteCity';
import { getAllAreas, deleteArea } from '../../redux/actions/area/getAndDeleteArea';
import { connect } from 'react-redux';
import { listData } from '../../util/commonUtil';
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
class ViewArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryId: '',
            stateId: '',
            cityId: '',
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
        this.props.getAllAreas(this.state.countryId, this.state.stateId, this.state.cityId);
        setTimeout(() => {
            this.setState({
                ...this.state,
                areas: this.props.areas
            })
        }, 1000);
    }

    deleteHandler = (areaId) => {
        this.props.deleteArea(this.state.countryId, this.state.stateId, this.state.cityId, areaId);
        setTimeout(() => {
            this.setState({
                ...this.state,
                areas: this.props.areas
            })
        }, 1000);
    }

    render() {
        const { countryId, stateId, cityId } = this.state;
        var columns = [
            {
                name: 'Area ID',
                selector: 'id',
                sortable: true
            },
            {
                name: 'Area Name',
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
                        <DashboardPage icon="university" name="View Area Details" />
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
                                        <Input type="select" id="country" name="countryId" value={countryId} onChange={this.countryChangeHandler} required>
                                            <option value="">Select Country</option>
                                            {listData(this.props.countries)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="state" className={classes.Label}>State Name</Label>
                                        <Input type="select" id="state" name="stateId" value={stateId} onChange={this.stateChangeHandler} required>
                                            <option value="">Select State</option>
                                            {listData(this.props.states)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="city" className={classes.Label}>City Name</Label>
                                        <Input type="select" id="city" name="cityId" value={cityId} onChange={this.changeHandler} required>
                                            <option value="">Select City</option>
                                            {listData(this.props.cities)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="View Areas" className="btn btn-danger" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col xs="6">
                                <div className={classes.Main}>
                                    <DataTable
                                        noHeader={true}
                                        striped={true}
                                        columns={columns}
                                        data={this.state.areas}
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
        cities: state.getAndDeleteCity.cities,
        areas: state.getAndDeleteArea.areas
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries()),
        getAllStates: (countryId) => dispatch(getAllStates(countryId)),
        getAllCities: (countryId, stateId) => dispatch(getAllCities(countryId, stateId)),
        getAllAreas: (countryId, stateId, cityId) => dispatch(getAllAreas(countryId, stateId, cityId)),
        deleteArea: (countryId, stateId, cityId, areaId) => dispatch(deleteArea(countryId, stateId, cityId, areaId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewArea);