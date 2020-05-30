import React from 'react';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Footer from '../../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import classes from './MessageDetail.module.css';
import { connect } from 'react-redux';
import { bloodRecipientDetail } from '../../redux/actions/recipient/getRecipientDetail';

class MessageDetail extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params
        console.log(id);
        this.props.getDetail(id);
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
                        <DashboardPage icon="envelope" name="Message" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <div className={classes.Jumbotron}>
                            <i>
                                <p>Hello Admin,</p>
                                <p>{this.props.recipient.patientName} needs {this.props.recipient.bloodUnit} units of <b>{this.props.recipient.requiredBloodGroup} blood</b> urgently by <b>{this.props.recipient.date}</b>. He is admit in <b>{this.props.recipient.hospitalName}, {this.props.recipient.city}</b>. Please do the needful.</p>
                                <p className={classes.Thanks}>Thanks,</p>
                                <p>Support Team</p>
                            </i>
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

const mapStateToProps = (state) => {
    return {
        recipient: state.recipientDetail.bloodRecipient
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: (id) => dispatch(bloodRecipientDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageDetail);