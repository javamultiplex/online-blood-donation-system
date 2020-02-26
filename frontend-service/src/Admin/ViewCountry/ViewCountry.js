import React from 'react';
import classes from './ViewCountry.module.css';
import {
    Container,
    Row,
    Col,
    Table,
    Badge
} from 'reactstrap';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class ViewCountry extends React.Component {
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
                        <DashboardPage icon="university" name="View Country Details" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <div className={classes.Main}>
                            <b>Total Countries : 12</b>
                            <Table className={classes.Table} striped>
                                <tbody>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Country Name</th>
                                        <th>Delete</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>India</td>
                                        <td>
                                            <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt" /></Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>India</td>
                                        <td>
                                            <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt" /></Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>India</td>
                                        <td>
                                            <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt" /></Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>India</td>
                                        <td>
                                            <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt" /></Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
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

export default ViewCountry;