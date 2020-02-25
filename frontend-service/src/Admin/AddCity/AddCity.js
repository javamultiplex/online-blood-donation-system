import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Footer from '../../Footer/Footer';
import {
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Form,
    Table,
    Badge,
    Button
} from 'reactstrap';
import classes from './AddCity.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AddCity extends React.Component {
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
                        <DashboardPage icon="university" name="Add City" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <Row>
                            <Col xs="6">
                                <Form className={classes.Form}>
                                    <FormGroup>
                                        <Label for="country" className={classes.Label}>Country Name</Label>
                                        <Input type="select" id="country" name="country" required>
                                            <option value="India">India</option>
                                            <option value="Pakistan">Pakistan</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="state" className={classes.Label}>State Name</Label>
                                        <Input type="select" id="state" name="state" required>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="city" className={classes.Label}>City Name</Label>
                                        <Input type="text" id="city" name="state" required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="Add City" className="btn btn-danger"/>
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col xs="6">
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>India</td>
                                            <td>Uttarakhand</td>
                                            <td>Rudrapur</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt"/>
                                                </Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>India</td>
                                            <td>Delhi</td>
                                            <td>Gurgaon</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt"/>
                                                </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button 
                                color="danger"
                                onClick={()=>this.props.history.push('/admin/view-city')}>View All</Button>
                            </Col>
                        </Row>
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

export default AddCity;