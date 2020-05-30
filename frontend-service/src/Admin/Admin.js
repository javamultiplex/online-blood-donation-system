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
import { connect } from 'react-redux';
import { bloodRecipientFindAll } from '../redux/actions/recipient/getRecipients';
class Admin extends React.Component {

    componentDidMount() {
        this.props.findAll();
    }

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
                                {
                                    this.props.recipients.map((recipient, index) =>
                                        <React.Fragment key={index}>
                                            <div className={classes.message}>
                                                <p className={classes.right}>
                                                    <i>{new Date().toLocaleString()}</i>
                                                    <Badge color="info"
                                                        className={classes.Badge}
                                                        onClick={() => {
                                                            this.props.history.push('/admin/message-detail')
                                                        }}><i>View</i></Badge>
                                                    <Badge color="danger" className={classes.Badge}><i>Delete</i></Badge>
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon icon="envelope" className={classes.FontAwesomeIcon} />
                                                    <b>{recipient.patientName} : </b> Need {recipient.requiredBloodGroup} Blood...
                                               </p>
                                            </div>
                                            <br />
                                        </React.Fragment>)
                                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);