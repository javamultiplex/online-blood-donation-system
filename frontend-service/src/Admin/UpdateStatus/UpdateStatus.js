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
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { bloodRecipientUpdateStatus } from '../../redux/actions/recipient/updateRecipientStatus';
class UpdateStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            status: '',
            comment: ''
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            ...this.state,
            id: id
        })
    }

    changeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.updateStatus(this.state.id, this.state.status, this.state.comment)
        setTimeout(() => {
            this.props.history.push('/admin/need-blood')
        }, 1000);
    }

    render() {
        const { status, comment } = this.state;
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
                            <Form onSubmit={this.submitHandler}>
                                <FormGroup>
                                    <Label for="status"
                                        className={classes.Label}>Status</Label>
                                    <Input type="select"
                                        name="status"
                                        id="status" required onChange={this.changeHandler} value={status}>
                                        <option value="">Please select status</option>
                                        <option value="REJECTED">Rejected</option>
                                        <option value="ACKNOWLEDGED">Acknowledged</option>
                                        <option value="COMPLETED">Completed</option>
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
                                        required
                                        onChange={this.changeHandler}
                                        value={comment} />
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

const mapDisptachToProps = (dispatch) => {
    return {
        updateStatus: (id, status, comment) => dispatch(bloodRecipientUpdateStatus(id, status, comment))
    }
}

export default compose(withRouter,
    connect(null, mapDisptachToProps))(UpdateStatus);