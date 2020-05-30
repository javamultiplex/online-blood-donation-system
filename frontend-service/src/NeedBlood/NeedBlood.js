import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import BreadcrumbC from '../BreadcrumbC/BreadcrumbC';
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';
import classes from './NeedBlood.module.css';
import { connect } from 'react-redux';
import { bloodRecipientRegister } from '../redux/actions/recipient/registerRecipient';
class NeedBlood extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            payload: {
                patientName: '',
                gender: '',
                requiredBloodGroup: '',
                bloodUnit: '',
                date: '',
                hospitalName: '',
                city: '',
                pincode: '',
                contactName: '',
                emailId: '',
                phoneNumber: '',
                reason: ''
            },
            prescription: '',
            success: '',
            error: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.register(this.state.prescription, this.state.payload);
        setTimeout(() => {
            this.setState({
                ...this.state,
                payload: {
                    ...this.state.payload
                },
                success: this.props.success,
                error: this.props.error

            })
            this.reset();
        }, 1000);
    }

    reset = () => {
        this.setState({
            payload: {
                patientName: '',
                gender: '',
                requiredBloodGroup: '',
                bloodUnit: '',
                date: '',
                hospitalName: '',
                city: '',
                pincode: '',
                contactName: '',
                emailId: '',
                phoneNumber: '',
                reason: ''
            },
            prescription: null,
            success: '',
            error: ''
        })
    }

    fileChangeHandler = (e) => {
        this.setState({
            ...this.state,
            payload: {
                ...this.state.payload
            },
            prescription: e.target.files[0]
        })
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            payload: {
                ...this.state.payload,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {

        const { patientName,
            gender,
            requiredBloodGroup,
            bloodUnit,
            date,
            hospitalName,
            city,
            pincode,
            contactName,
            emailId,
            phoneNumber,
            reason } = this.state.payload;

        return (
            <Container>
                <Row>
                    <Col>
                        <TopNavigation />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className={classes.pageHeading}>
                            <FontAwesomeIcon icon="bed" /> Need Blood To Save Life
                                </h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.breadCrumb}>
                            <BreadcrumbC />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div>
                        <Col>
                            {
                                this.state.success ? alert(this.state.success) : ''
                            }
                            {
                                this.state.error ? alert(this.state.error) : ''
                            }
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <h3 className={classes.formHeading}>
                            <FontAwesomeIcon icon="bed" /> Need Blood to Save Lifes
                            </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className={classes.form} onSubmit={this.handleSubmit}>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="patientName" className={classes.Label}>Patient Name</Label>
                                        <Input type="text"
                                            id="patientName"
                                            name="patientName"
                                            placeholder="Enter patient full name"
                                            required
                                            onChange={this.changeHandler}
                                            value={patientName} />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="gender" className={classes.Label}>Gender</Label>
                                        <Input type="select" name="gender" id="gender" required onChange={this.changeHandler} value={gender}>
                                            <option value="">Select gender</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                            <option value="O">Other</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="bloodGroup" className={classes.Label}>Required Blood Group</Label>
                                        <Input type="select" name="requiredBloodGroup" id="bloodGroup" required onChange={this.changeHandler} value={requiredBloodGroup}>
                                            <option value="">Select Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="bloodUnit" className={classes.Label}>Need Unit Of Blood</Label>
                                        <Input type="text"
                                            id="bloodUnit"
                                            name="bloodUnit"
                                            placeholder="Enter number of units"
                                            required
                                            onChange={this.changeHandler}
                                            value={bloodUnit} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="requiredDate" className={classes.Label}>When Required</Label>
                                        <Input type="date"
                                            id="requiredDate"
                                            name="date"
                                            required
                                            onChange={this.changeHandler}
                                            value={date} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="hospitalAddress" className={classes.Label}>Hospital Name and Address</Label>
                                        <Input type="textarea"
                                            id="hospitalAddress"
                                            name="hospitalName"
                                            rows="2"
                                            placeholder="Enter hospital full address"
                                            required
                                            onChange={this.changeHandler}
                                            value={hospitalName}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="city" className={classes.Label}>City</Label>
                                        <Input type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Enter city name"
                                            required
                                            onChange={this.changeHandler}
                                            value={city} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="pincode" className={classes.Label}>Pincode</Label>
                                        <Input type="text"
                                            id="pincode"
                                            name="pincode"
                                            placeholder="Enter pincode"
                                            required
                                            onChange={this.changeHandler}
                                            value={pincode} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="contactName" className={classes.Label}>Contact Name</Label>
                                        <Input type="text"
                                            id="contactName"
                                            name="contactName"
                                            placeholder="Enter contact name"
                                            required
                                            onChange={this.changeHandler}
                                            value={contactName} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="email" className={classes.Label}>Email ID</Label>
                                        <Input type="email"
                                            id="email"
                                            name="emailId"
                                            placeholder="Enter email id"
                                            required
                                            onChange={this.changeHandler}
                                            value={emailId} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="phone" className={classes.Label}>Phone Number</Label>
                                        <Input type="text"
                                            id="phone"
                                            name="phoneNumber"
                                            placeholder="Enter phone number"
                                            required
                                            onChange={this.changeHandler}
                                            value={phoneNumber} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="bloodReason" className={classes.Label}>Reason For Blood</Label>
                                        <Input type="textarea"
                                            id="bloodReason"
                                            name="reason"
                                            placeholder="Enter reason"
                                            required
                                            onChange={this.changeHandler}
                                            value={reason} />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="prescription" className={classes.Label}>Upload Valid Prescription</Label>
                                        <Input type="file"
                                            id="prescription"
                                            name="prescription"
                                            required
                                            onChange={this.fileChangeHandler} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Input type="submit"
                                    value="Request Now"
                                    className="btn-lg btn-danger" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <Footer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.registerRecipient.error,
        success: state.registerRecipient.success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (prescription, request) => dispatch(bloodRecipientRegister(prescription, request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NeedBlood);