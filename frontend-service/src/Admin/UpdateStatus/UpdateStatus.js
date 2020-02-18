import React from 'react';
import {
    Container,
    Col,
    Row,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Footer from '../../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import classes from './UpdateStatus.module.css';
class UpdateStatus extends React.Component {
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
                        <DashboardPage icon="users" name="Update Status" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <div className={classes.Form}>
                            <Form>
                                <FormGroup>
                                    <Label for="status"
                                        className={classes.Label}>Status</Label>
                                    <Input type="select"
                                        name="status"
                                        id="status" required>
                                        <option value="">Please select status</option>
                                        <option value="Rejected">Rejected</option>
                                        <option value="Acknowledged">Acknowledged</option>
                                        <option value="Completed">Completed</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="comment"
                                        className={classes.Label}>Comment</Label>
                                    <Input type="textarea"
                                        id="comment"
                                        name="comment"
                                        row="4"
                                        placeholder="Please enter additional comments"
                                        required/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="submit"
                                        value="Update"
                                        className="btn btn-danger" />
                                </FormGroup>
                            </Form>
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

export default UpdateStatus;