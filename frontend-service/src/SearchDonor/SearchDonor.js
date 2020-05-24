import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
import Footer from '../Footer/Footer';
import classes from './SearchDonor.module.css';
import BreadcrumbC from '../BreadcrumbC/BreadcrumbC';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Table,
    Alert
} from 'reactstrap';
import MediaC from '../MediaC/MediaC';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bloodDonorSearch } from '../redux/actions/donor/searchDonor';
class SearchDonor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bloodGroup: '',
            searchText: '',
            searchType: '',
            bloodDonor: []
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.bloodDonorSearch(this.state.searchText, this.state.bloodGroup);
        setTimeout(() => {
            this.setState({
                ...this.state,
                bloodDonor: this.props.bloodDonor
            })
        }, 1000);
        this.reset();
    }

    reset = () => {
        this.setState({
            bloodGroup: '',
            searchText: '',
            searchType: ''
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        console.log(this.props.match.path);
        const { searchType, searchText, bloodGroup } = this.state;
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
                            <FontAwesomeIcon icon="search" /> Search Donor Availibility
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
                    <Col>
                        <Row>
                            <Col>
                                <h3 className={classes.formHeading}>
                                    <FontAwesomeIcon icon="search" /> Search Donor Availibility
                                </h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <Form className={classes.form} onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <Label for="searchType" className={classes.Label}>Search Type</Label>
                                            <Input type="select"
                                                id="searchType"
                                                name="searchType"
                                                value={searchType}
                                                onChange={this.changeHandler}
                                                required>
                                                <option value="">Select Search Type</option>
                                                <option value="pincode">Pincode</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="bloodGroup" className={classes.Label}>Required Blood Group</Label>
                                            <Input type="select"
                                                name="bloodGroup"
                                                id="bloodGroup"
                                                value={bloodGroup}
                                                onChange={this.changeHandler}
                                                required>
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
                                        <FormGroup>
                                            <Label for="searchText" className={classes.Label}>Seach Text</Label>
                                            <Input type="text"
                                                id="searchText"
                                                name="searchText"
                                                placeholder="Type Text"
                                                value={searchText}
                                                onChange={this.changeHandler}
                                                required />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="submit"
                                                value="Seach Donor"
                                                className="btn-lg btn-danger" />
                                        </FormGroup>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className={classes.rightColumn}>
                            {
                                this.state.bloodDonor.length === 0 ? <Alert style={{marginTop:'150px'}} color="danger">
                                    No data found!
                                </Alert> : ''
                            }
                            {
                                this.state.bloodDonor.map((donor, index) =>
                                    <MediaC key={index} image={`data:image/jpeg;base64,${donor.image}`}
                                        imageAlt=""
                                        heading={`${donor.firstName} ${donor.lastName}`}
                                        mediaObjectClassName={classes.MediaObject}
                                        body={
                                            <Table bordered>
                                                <tbody>
                                                    <tr>
                                                        <th>State</th>
                                                        <td>{donor.address.state}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>City</th>
                                                        <td>{donor.address.city}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Area</th>
                                                        <td>{donor.address.area}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Pincode</th>
                                                        <td>{donor.address.zip}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        } />)
                            }
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bloodDonor: state.searchDonor.bloodDonor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bloodDonorSearch: (pincode, bloodGroup) => dispatch(bloodDonorSearch(pincode, bloodGroup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDonor);