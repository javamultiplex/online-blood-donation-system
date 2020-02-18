import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
import Footer from '../Footer/Footer';
import classes from './SearchDonor.module.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Table
} from 'reactstrap';
import MediaC from '../MediaC/MediaC';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../assets/rohit.jpg';
import image2 from '../assets/bhavna.jpg';
class SearchDonor extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        console.log(this.props.match.path);
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
                </Row> */}
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
                                            <Input type="select" id="searchType" name="searchType">
                                                <option value="">Select Search Type</option>
                                                <option value="pincode">Pincode</option>
                                                <option value="state">State</option>
                                                <option value="city">City</option>
                                                <option value="area">Area</option>
                                            </Input>
                                        </FormGroup>
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
                                        <FormGroup>
                                            <Label for="searchText" className={classes.Label}>Seach Text</Label>
                                            <Input type="text"
                                                id="searchText"
                                                name="searchText"
                                                placeholder="Type Text"
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
                            <MediaC image={image1}
                                imageAlt="image1"
                                heading="Rohit Agarwal"
                                mediaObjectClassName={classes.MediaObject}
                                body={
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <th>State</th>
                                                <td>Uttarakhand</td>
                                            </tr>
                                            <tr>
                                                <th>City</th>
                                                <td>Rudrapur</td>
                                            </tr>
                                            <tr>
                                                <th>Area</th>
                                                <td>Adarash Colony</td>
                                            </tr>
                                            <tr>
                                                <th>Pincode</th>
                                                <td>263153</td>
                                            </tr>
                                            <tr>
                                                <th>Contact</th>
                                                <td>7411608536</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                } />

                            <MediaC image={image2}
                                imageAlt="image2"
                                heading="Bhavna Agarwal"
                                mediaObjectClassName={classes.MediaObject}
                                body={
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <th>State</th>
                                                <td>Uttarakhand</td>
                                            </tr>
                                            <tr>
                                                <th>City</th>
                                                <td>Rudrapur</td>
                                            </tr>
                                            <tr>
                                                <th>Area</th>
                                                <td>Adarash Colony</td>
                                            </tr>
                                            <tr>
                                                <th>Pincode</th>
                                                <td>263153</td>
                                            </tr>
                                            <tr>
                                                <th>Contact</th>
                                                <td>7411608536</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                } />
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

export default SearchDonor;