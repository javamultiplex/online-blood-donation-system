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
import { connect } from 'react-redux';
import { bloodRecipientFindAll } from '../../redux/actions/recipient/getRecipients';
import classes from './AdminNeedBlood.module.css';

class AdminNeedBlood extends React.Component {


    componentDidMount() {
        this.props.findAll();
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
                        <DashboardPage icon="bed" name="Need Blood" />
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
                                        <th>Unit</th>
                                        <th>Hospital</th>
                                        <th>Reason</th>
                                        <th>Required Date</th>
                                        <th>Status</th>
                                        <th>Update</th>
                                    </tr>
                                    {
                                        this.props.recipients.map((recipient, index) => <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{recipient.patientName}</td>
                                            <td>{recipient.gender}</td>
                                            <td>{recipient.requiredBloodGroup}</td>
                                            <td>{recipient.bloodUnit}</td>
                                            <td>{recipient.hospitalName}</td>
                                            <td>{recipient.reason}</td>
                                            <td>{recipient.date}</td>
                                            <td><Badge color={
                                                getColor(recipient.status)
                                            }>{recipient.status}</Badge></td>
                                            <td><Badge
                                                color="info"
                                                className={classes.Badge}
                                                onClick={() => {
                                                    this.props.history.push("/admin/update-status")
                                                }}>Update</Badge></td>
                                        </tr>)
                                    }
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

function getColor(status) {
    let color = ''
    if (status === 'PENDING') {
        color = 'warning'
    } else if (status === 'COMPLETED') {
        color = 'success'
    } else if (status === 'REJECTED') {
        color = 'danger'
    } else if (status === 'ACKNOWLEDGED') {
        color = 'primary'
    }
    return color;
}

const mapStateToProps = (state) => {
    return {
        recipients: state.recipients.bloodRecipients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findAll: () => dispatch(bloodRecipientFindAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNeedBlood);