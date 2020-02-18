import React from 'react';
import {
    Row,
    Col,
    Container,
    Badge
} from 'reactstrap';
import AdminTopNavigation from './AdminTopNavigation/AdminTopNavigation';
import Footer from '../Footer/Footer';
import AdminLeftNavigation from './AdminLeftNavigation/AdminLeftNavigation';
import DashboardPage from './DashboardPage/DashboardPage';
import Dashboard from './Dashboard/Dashboard';
import classes from './Admin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Admin extends React.Component {
    render() {
        return (
            <>
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
                            <DashboardPage icon="envelope" name="Inbox" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3">
                            <AdminLeftNavigation />
                        </Col>
                        <Col xs="9">
                            <div className={classes.Admin}>
                                <div className={classes.message}>
                                    <p className={classes.right}>
                                        <i>2019-03-11 04:56:56</i>
                                        <Badge color="info"
                                            className={classes.Badge}
                                            onClick={() => {
                                                this.props.history.push('/admin/message-detail')
                                            }}><i>View</i></Badge>
                                        <Badge color="danger" className={classes.Badge}><i>Delete</i></Badge>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon="envelope" className={classes.FontAwesomeIcon} />
                                        <b>Rohit : </b> Need A+ Blood...
                                    </p>
                                </div>
                                <br />
                                <div className={classes.message}>

                                    <p className={classes.right}>
                                        <i>2019-03-11 04:56:56</i>
                                        <Badge color="info"
                                            className={classes.Badge}
                                            onClick={() => {
                                                this.props.history.push("/admin/message-detail")
                                            }}><i>View</i></Badge>
                                        <Badge color="danger" className={classes.Badge}><i>Delete</i></Badge>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon="envelope" className={classes.FontAwesomeIcon} />
                                        <b>Rohit : </b> Need A+ Blood...
                                    </p>
                                </div>
                                <br />
                                <div className={classes.message}>

                                    <p className={classes.right}>
                                        <i>2019-03-11 04:56:56</i>
                                        <Badge color="info"
                                            className={classes.Badge}
                                            onClick={() => {
                                                this.props.history.push("/admin/message-detail")
                                            }}><i>View</i></Badge>
                                        <Badge color="danger" className={classes.Badge}><i>Delete</i></Badge>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon="envelope" className={classes.FontAwesomeIcon} />
                                        <b>Rohit : </b> Need A+ Blood...
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Footer />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Admin;