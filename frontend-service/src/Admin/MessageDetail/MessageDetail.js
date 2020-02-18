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

class MessageDetail extends React.Component {
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
                            <p>Rohit needs 4 units of <b>A+ blood</b> urgently by <b>2019-11-10</b>. He is admit in <b>Paras Hospital, Gurgaon</b>. Please do the needful.</p>
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

export default MessageDetail;