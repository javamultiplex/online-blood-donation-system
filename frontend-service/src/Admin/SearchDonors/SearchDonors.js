import React from 'react';
import {
    Container,
    Col,
    Row,
    Table,
    Badge
} from 'reactstrap';
import Footer from '../../Footer/Footer';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import classes from './SearchDonors.module.css';
import SearchBox from '../SearchBox/SearchBox';
class SearchDonors extends React.Component {
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
                        <DashboardPage icon="search" name="Search Donor Details" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <>
                            <SearchBox />
                            <div className={classes.Table}>
                                <Table striped >
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
                                                className={classes.Badge}>View</Badge></td>
                                            <td><Badge
                                                color="danger"
                                                className={classes.Badge}>Delete</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </>
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

export default SearchDonors;