import React from 'react';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Footer from '../../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import {
    Container,
    Row,
    Col,
    Table,
    Badge
} from 'reactstrap';
import SearchBox from '../SearchBox/SearchBox';
import classes from './AdminNeedBlood.module.css';

class AdminNeedBlood extends React.Component {
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
                        <DashboardPage icon="bed" name="Need Blood" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <SearchBox />
                        <div className={classes.Table}>
                            <Table striped>
                                <tbody>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Blood</th>
                                        <th>Unit</th>
                                        <th>Hospital</th>
                                        <th>Reason</th>
                                        <th>Required Date</th>
                                        <th>Status</th>
                                        <th>Update</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Rohit</td>
                                        <td>Male</td>
                                        <td>A+</td>
                                        <td>2</td>
                                        <td>Ganga Ram Hospital</td>
                                        <td>Accident</td>
                                        <td>29-10-2019</td>
                                        <td><Badge color="danger">Pending</Badge></td>
                                        <td><Badge
                                            color="info"
                                            className={classes.Badge}
                                            onClick={() => {
                                                this.props.history.push("/admin/update-status")
                                            }}>Update</Badge></td>
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

export default AdminNeedBlood;