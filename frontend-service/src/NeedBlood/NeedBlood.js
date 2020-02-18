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
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';
import classes from './NeedBlood.module.css';

class NeedBlood extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <TopNavigation />
                    </Col>
                </Row>
                {/* <Row>
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
                </Row> */}
                <Row>
                    <Col>
                        <h3 className={classes.formHeading}>
                            <FontAwesomeIcon icon="bed" /> Need Blood to Save Lifes
                            </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className={classes.form}>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="patientName" className={classes.Label}>Patient Name</Label>
                                        <Input type="text"
                                            id="patientName"
                                            name="patientName"
                                            placeholder="Enter patient full name"
                                            required />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="gender" className={classes.Label}>Gender</Label>
                                        <Input type="select" name="gender" id="gender" required>
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
                                        <Input type="select" name="bloodGroup" id="bloodGroup" required>
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
                                            required />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="requiredDate" className={classes.Label}>When Required</Label>
                                        <Input type="date"
                                            id="requiredDate"
                                            name="requiredDate"
                                            required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="hospitalAddress" className={classes.Label}>Hospital Name and Address</Label>
                                        <Input type="textarea"
                                            id="hospitalAddress"
                                            name="hospitalAddress"
                                            rows="2"
                                            placeholder="Enter hospital full address"
                                            required
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
                                            required />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="pincode" className={classes.Label}>Pincode</Label>
                                        <Input type="text"
                                            id="pincode"
                                            name="pincode"
                                            placeholder="Enter pincode"
                                            required />
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
                                            required />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="email" className={classes.Label}>Email ID</Label>
                                        <Input type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter email id"
                                            required />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="phone" className={classes.Label}>Phone Number</Label>
                                        <Input type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter phone number"
                                            required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="bloodReason" className={classes.Label}>Reason For Blood</Label>
                                        <Input type="textarea"
                                            id="bloodReason"
                                            name="bloodReason"
                                            placeholder="Enter reason"
                                            required />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="photo" className={classes.Label}>Upload Valid Prescription</Label>
                                        <Input type="file"
                                            id="photo"
                                            name="photo"
                                            required />
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

export default NeedBlood;