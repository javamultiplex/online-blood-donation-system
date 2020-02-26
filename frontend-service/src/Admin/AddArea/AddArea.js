import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import Footer from '../../Footer/Footer';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import classes from './AddArea.module.css';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Table,
    Badge,
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddArea extends React.Component {
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
                        <DashboardPage icon="university" name="Add Area" />
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
                                            <option value="Haryana">Haryana</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="city" className={classes.Label}>City Name</Label>
                                        <Input type="select" id="city" name="city" required>
                                            <option value="Rudrapur">Rudrapur</option>
                                            <option value="Dehradun">Dehradun</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="area" className={classes.Label}>Area Name</Label>
                                        <Input type="text" id="area" name="area" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="Add Area" className="btn btn-danger" />
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
                                            <th>Area</th>
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>India</td>
                                            <td>Haryana</td>
                                            <td>Gurgaon</td>
                                            <td>Mg Road</td>
                                            <td>
                                                <Badge className={classes.Badge} color="danger"><FontAwesomeIcon icon="trash-alt"/></Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>India</td>
                                            <td>Haryana</td>
                                            <td>Gurgaon</td>
                                            <td>Mg Road</td>
                                            <td>
                                                <Badge className={classes.Badge} color="danger"><FontAwesomeIcon icon="trash-alt"/></Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>India</td>
                                            <td>Haryana</td>
                                            <td>Gurgaon</td>
                                            <td>Mg Road</td>
                                            <td>
                                                <Badge className={classes.Badge} color="danger"><FontAwesomeIcon icon="trash-alt"/></Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button 
                                color="danger"
                                onClick={()=> this.props.history.push('/admin/view-area')}>View All</Button>
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

export default AddArea;