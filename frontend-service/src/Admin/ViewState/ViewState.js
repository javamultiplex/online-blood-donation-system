import React from 'react';
import classes from './ViewState.module.css';
import {
    Container,
    Row,
    Col,
    Badge,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import DataTable from 'react-data-table-component';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { getAllCountries } from '../../redux/actions/country/getAndDeleteCountry';
import { deleteState, getAllStates } from '../../redux/actions/state/getAndDeleteState';
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

class ViewState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryId: ''
        }
    }

    componentDidMount() {
        this.props.getAllCountries();
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.getAllStates(this.state.countryId);
    }

    changeHandler = (event) => {
        this.setState({
            countryId: event.target.value
        })
    }

    render() {
        const {countryId}=this.state;
        var columns = [
            {
                name: 'State ID',
                selector: 'id',
                sortable: true
            },
            {
                name: 'State Name',
                selector: 'name',
                sortable: true
            },
            {
                name: 'Delete',
                cell: row => <Badge color="danger" className={classes.Badge} onClick={() => this.props.deleteState(this.state.countryId, row.id)}><FontAwesomeIcon icon="trash-alt" /></Badge>
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
                        <DashboardPage icon="university" name="View State Details" />
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
                                        <Input type="select" name="country" id="country" onChange={this.changeHandler} value={countryId} vrequired>
                                            <option value="">Select Country</option>
                                            {
                                                this.props.countries.map((country, index) =>
                                                    (<option key={index} value={country.id}>{country.name}</option>))
                                            }
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="View States" className="btn btn-danger" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col xs="6">
                                <div className={classes.Main}>
                                    <DataTable
                                        noHeader={true}
                                        striped={true}
                                        columns={columns}
                                        data={this.props.states}
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
        states: state.getAndDeleteState.states
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries()),
        deleteState: (countryId, stateId) => dispatch(deleteState(countryId, stateId)),
        getAllStates: (countryId) => dispatch(getAllStates(countryId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewState);