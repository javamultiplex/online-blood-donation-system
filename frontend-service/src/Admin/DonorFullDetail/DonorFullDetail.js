import React from 'react';
import {
    Table,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
import classes from './DonorFullDetail.module.css';
import profilepic from '../../assets/rohit.jpg';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import Footer from '../../Footer/Footer';

class DonorFullDetail extends React.Component {
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
                        <DashboardPage icon="users" name="Donor Details" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <div className={classes.Table}>
                            <table borderless>
                                <tbody>
                                    <tr>
                                        <td className={classes.img}>
                                            <img src={profilepic} width="300px" height="300px" alt="profilepic" />
                                        </td>
                                        <td className={classes.td}>
                                            <Table striped>
                                                <tbody>
                                                    <tr>
                                                        <th>Name</th>
                                                        <td>Rohit Agarwal</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Father Name</th>
                                                        <td>Gopal Agarwal</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Gender</th>
                                                        <td>Male</td>
                                                    </tr>
                                                    <tr>
                                                        <th>D.O.B</th>
                                                        <td>11-06-1992</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Blood Group</th>
                                                        <td>A+</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Body Weight</th>
                                                        <td>60 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Email</th>
                                                        <td>geurohit.21@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Address</th>
                                                        <td>F-14, Adarash colony</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Area</th>
                                                        <td>Adarash Colony</td>
                                                    </tr>
                                                    <tr>
                                                        <th>City</th>
                                                        <td>Rudrapur</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Pincode</th>
                                                        <td>263153</td>
                                                    </tr>
                                                    <tr>
                                                        <th>State</th>
                                                        <td>Uttarakhand</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Contact</th>
                                                        <td>7411608536</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Status</th>
                                                        <td><Button color="danger">Activate Now</Button></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

export default DonorFullDetail;