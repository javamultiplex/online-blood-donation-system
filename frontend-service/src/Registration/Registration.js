import React from 'react';
import classes from './Registration.module.css';
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
import axios from 'axios';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Container,
} from 'reactstrap';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            fatherName: '',
            gender: '',
            dob: '',
            bloodGroup: '',
            bodyWeight: '',
            emailId: '',
            state: '',
            city: '',
            area: '',
            pincode: '',
            address: '',
            phoneNumber: '',
            photo:'',
            success: false,
            processed: false
        }

        this.baseState = this.state
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:9090/api/v1/register', this.state)
            .then(response => {
                console.log(response);
                this.setState(this.baseState);
                this.setState({
                    processed: true,
                    success: true
                })
            }).catch(error => {
                console.log(error);
            })
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {
            name,
            fatherName,
            gender,
            dob,
            bloodGroup,
            bodyWeight,
            emailId,
            state,
            city,
            area,
            pincode,
            address,
            phoneNumber
            } = this.state;
        const successMessage = <h1 style={{ textAlign: 'center' }}>Blood donor has been registered successfully !!</h1>;
        const errorMessage = <h1 style={{ textAlign: 'center' }}>Registeration failed.</h1>
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <TopNavigation />
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <h2 className={classes.pageHeading}>
                                <FontAwesomeIcon icon="user-plus" /> New Donor Registration
                                </h2>
                            <hr />
                        </Col>
                    </Row> */}
                    {/* <Row>
                        <Col>
                            <div className={classes.breadCrumb}>
                                <BreadcrumbC />
                            </div>
                        </Col>
                    </Row> */}
                    <Row>
                        <div style={{ 'marginTop': '70px' }}>
                            <Col>
                                {
                                    this.state.processed ? (this.state.success ? successMessage : errorMessage) : ' '
                                }
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className={classes.formHeading}>
                                <FontAwesomeIcon icon="user-plus" /> Join As Blood Donor
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <Form className={classes.form} onSubmit={this.handleSubmit}>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="name" className={classes.Label}>Name</Label>
                                                <Input type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                    required
                                                    onChange={this.changeHandler}
                                                    value={name} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="fatherName" className={classes.Label}>Father Name</Label>
                                                <Input type="text"
                                                    id="fatherName"
                                                    name="fatherName"
                                                    placeholder="Enter your father's name"
                                                    required
                                                    onChange={this.changeHandler}
                                                    value={fatherName} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={4}>
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
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="bloodGroup" className={classes.Label}>Blood Group</Label>
                                                <Input type="select" name="bloodGroup" id="bloodGroup" required onChange={this.changeHandler} valu={bloodGroup}>
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
                                                <Label for="bodyWeight" className={classes.Label}>Body Weight</Label>
                                                <Input type="text"
                                                    id="bodyWeight"
                                                    name="bodyWeight"
                                                    placeholder="Enter your body weight"
                                                    required
                                                    onChange={this.changeHandler}
                                                    value={bodyWeight} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="dob" className={classes.Label}>DOB</Label>
                                                <Input type="date"
                                                    id="dob"
                                                    name="dob"
                                                    placeholder="Enter your date of birth in yyyy-MM-dd format"
                                                    onBlur={this.BlurEvent}
                                                    required
                                                    onChange={this.changeHandler}
                                                    value={dob} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="email" className={classes.Label}>Email ID</Label>
                                                <Input type="email"
                                                    id="email"
                                                    name="emailId"
                                                    placeholder="Enter your emai id"
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
                                                    placeholder="Enter your phone number"
                                                    required
                                                    onChange={this.changeHandler}
                                                    value={phoneNumber} />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row form>

                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="state" className={classes.Label}>State</Label>
                                                <Input type="select" id="state" name="state" required onChange={this.changeHandler} value={state}>
                                                    <option value="">Select State</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="city" className={classes.Label}>City</Label>
                                                <Input type="select" id="city" name="city" required onChange={this.changeHandler} value={city}>
                                                    <option value="">Select City</option>
                                                    <option value="Rudrapur">Rudrapur</option>
                                                    <option value="Haldwani">Haldwani</option>
                                                    <option value="Dehradun">Dehradun</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="area" className={classes.Label}>Area</Label>
                                                <Input type="select" id="area" name="area" required onChange={this.changeHandler} value={area}>
                                                    <option value="">Select Area</option>
                                                    <option value="Adarash Colony">Adarash Colony</option>
                                                    <option value="Singh Colony">Singh Colony</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="pincode" className={classes.Label}>Pincode</Label>
                                                <Input type="text"
                                                    id="pincode"
                                                    name="pincode"
                                                    placeholder="Enter your pincode"
                                                    required
                                                    onChange={this.changeHandler}
                                                    value={pincode} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="address" className={classes.Label}>Compelete Address</Label>
                                                <Input type="textarea"
                                                    id="address"
                                                    name="address"
                                                    placeholder="Enter your address"
                                                    rows="3"
                                                    required
                                                    onChange={this.changeHandler}
                                                    value={address} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="photo" className={classes.photo}>Upload Photo</Label>
                                                <Input type="file"
                                                    id="photo"
                                                    name="photo"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Input type="submit"
                                            value="Submit"
                                            className="btn-lg btn-danger" />
                                    </FormGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                            <Footer />
                        </Col>
                    </Row>
                </Container>

            </>
        );
    }

}

export default Registration;