import React from 'react';
import {
    Table,
    Badge,
    Container,
    Row,
    Col
} from 'reactstrap';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import classes from './ActiveDonors.module.css';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import Footer from '../../Footer/Footer';
class ActiveDonors extends React.Component {
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
                        <DashboardPage icon="users" name="Active Donor Details" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <div className={classes.Table}>
                            <Table striped>
                                <tbody>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Blood</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Area</th>
                                        <th>Contact</th>
                                        <th>View</th>
                                        <th>Delete</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Rohit</td>
                                        <td>Male</td>
                                        <td>A+</td>
                                        <td>Uttakhand</td>
                                        <td>Rudrapur</td>
                                        <td>Adarash Colony</td>
                                        <td>7411608536</td>
                                        <td><Badge
                                            color="info"
                                            onClick={() => this.props.history.push('/admin/donor-full-detail')}
                                            className={classes.Badge}>View</Badge></td>
                                        <td><Badge
                                            color="danger"
                                            className={classes.Badge}>Delete</Badge></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Shivani</td>
                                        <td>Female</td>
                                        <td>A</td>
                                        <td>Uttakhand</td>
                                        <td>Rudrapur</td>
                                        <td>Adarash Colony</td>
                                        <td>7411608536</td>
                                        <td><Badge
                                            color="info"
                                            onClick={() => this.props.history.push('/admin/donor-full-detail')}
                                            className={classes.Badge}
                                        >View</Badge></td>
                                        <td><Badge
                                            color="danger"
                                            className={classes.Badge}>Delete</Badge></td>
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

export default ActiveDonors;