import React from 'react';
import classes from './ViewState.module.css';
import {
    Container,
    Row,
    Col,
    Table,
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
        cell: row => <Badge color="danger" className={classes.Badge} onClick={() => this.props.deleteCountry(row.id)}><FontAwesomeIcon icon="trash-alt" /></Badge>
    },
];

class ViewState extends React.Component {
    componentDidMount() {
        this.props.getAllCountries();
    }
    render() {
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
                                <Form className={classes.Form}>
                                    <FormGroup>
                                        <Label for="country" className={classes.Label}>Country Name</Label>
                                        <Input type="select" name="country" id="country" required>
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
                                <b>Total States : 12</b>
                                <Table className={classes.Table} striped>
                                    <tbody>
                                        <tr>
                                            <th>S.No</th>
                                            <th>State Name</th>
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Delhi</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt" />
                                                </Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Rajasthan</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt" />
                                                </Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Karachi</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt" />
                                                </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
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
        countries: state.getAndDeleteCountry.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewState);