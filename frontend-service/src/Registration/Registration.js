import React from 'react';
import classes from './Registration.module.css';
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
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
import { connect } from 'react-redux';
import { listData } from '../util/commonUtil';
import { getAllCountries } from '../redux/actions/country/getAndDeleteCountry';
import { getAllStates } from '../redux/actions/state/getAndDeleteState';
import { getAllCities } from '../redux/actions/city/getAndDeleteCity';
import { getAllAreas } from '../redux/actions/area/getAndDeleteArea';
import { bloodDonorRegister } from '../redux/actions/donor/registerDonor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            payload: {
                firstName: '',
                middleName: '',
                lastName: '',
                gender: '',
                bloodGroup: '',
                bodyWeight: '',
                dob: '',
                emailId: '',
                phoneNumber: '',
                countryId: '',
                stateId: '',
                cityId: '',
                areaId: '',
                address: '',
                pincode: ''
            },
            image: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.register(this.state.image, this.state.payload)
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getAllCountries();
    }

    countryChangeHandler = (e) => {
        let countryId = e.target.value;
        this.props.getAllStates(countryId);
        this.setState({
            ...this.state,
            payload: {
                ...this.state.payload,
                countryId: countryId
            }
        })
    }

    stateChangeHandler = (e) => {
        let stateId = e.target.value;
        this.props.getAllCities(this.state.payload.countryId, stateId);
        this.setState({
            ...this.state,
            payload: {
                ...this.state.payload,
                stateId: stateId
            }
        })
    }

    cityChangeHandler = (e) => {
        let cityId = e.target.value;
        this.props.getAllAreas(this.state.payload.countryId, this.state.payload.stateId, cityId);
        this.setState({
            ...this.state,
            payload: {
                ...this.state.payload,
                cityId: cityId
            }
        })
    }

    fileChangeHandler = (e) => {
        this.setState({
            payload: {
                ...this.state.payload
            },
            image: e.target.files[0]
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
        const {
            firstName,
            middleName,
            lastName,
            gender,
            bloodGroup,
            bodyWeight,
            dob,
            emailId,
            phoneNumber,
            countryId,
            stateId,
            cityId,
            areaId,
            address,
            pincode
        } = this.state.payload;
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
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="firstName" className={classes.Label}>First Name</Label>
                                                <Input type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="Enter your first name"
                                                    required
                                                    onChange={this.changeHandler}
                                                    value={firstName} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="middleName" className={classes.middle}>Middle Name</Label>
                                                <Input type="text"
                                                    id="middleName"
                                                    name="middleName"
                                                    placeholder="Enter your middle name"
                                                    onChange={this.changeHandler}
                                                    value={middleName} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="lastName" className={classes.last}>Last Name</Label>
                                                <Input type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Enter your last name"
                                                    onChange={this.changeHandler}
                                                    value={lastName} />
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
                                                <Label for="country" className={classes.Label}>Country</Label>
                                                <Input type="select" id="country" name="countryId" required onChange={this.countryChangeHandler} value={countryId}>
                                                    <option value="">Select Country</option>
                                                    {listData(this.props.countries)}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="state" className={classes.Label}>State</Label>
                                                <Input type="select" id="state" name="stateId" required onChange={this.stateChangeHandler} value={stateId}>
                                                    <option value="">Select State</option>
                                                    {listData(this.props.states)}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="city" className={classes.Label}>City</Label>
                                                <Input type="select" id="city" name="cityId" required onChange={this.cityChangeHandler} value={cityId}>
                                                    <option value="">Select City</option>
                                                    {listData(this.props.cities)}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="area" className={classes.Label}>Area</Label>
                                                <Input type="select" id="area" name="areaId" required onChange={this.changeHandler} value={areaId}>
                                                    <option value="">Select Area</option>
                                                    {listData(this.props.areas)}
                                                </Input>
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
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="photo" className={classes.Label}>Upload Photo</Label>
                                                <Input type="file"
                                                    id="photo"
                                                    name="image"
                                                    onChange={this.fileChangeHandler}
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

const mapStateToProps = state => {
    return {
        countries: state.getAndDeleteCountry.countries,
        states: state.getAndDeleteState.states,
        cities: state.getAndDeleteCity.cities,
        areas: state.getAndDeleteArea.areas
    }
}

const mapDispatchToProps = disptach => {
    return {
        getAllCountries: () => disptach(getAllCountries()),
        getAllStates: (countryId) => disptach(getAllStates(countryId)),
        getAllCities: (countryId, stateId) => disptach(getAllCities(countryId, stateId)),
        getAllAreas: (countryId, stateId, cityId) => disptach(getAllAreas(countryId, stateId, cityId)),
        register: (image, request) => disptach(bloodDonorRegister(image, request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);