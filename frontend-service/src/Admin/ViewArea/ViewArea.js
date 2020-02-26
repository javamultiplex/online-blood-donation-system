import React from 'react';
import classes from './ViewArea.module.css';
import { Container, Row, Col, Label, Input, FormGroup, Form, Table, Badge } from 'reactstrap';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Footer from '../../Footer/Footer';
import DashboardPage from '../DashboardPage/DashboardPage';
import Dashboard from '../Dashboard/Dashboard';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ViewArea extends React.Component {
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
                        <DashboardPage icon="university" name="View Area Details" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation/>
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
                                        <Input type="submit" value="View Areas" className="btn btn-danger" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col xs="6">
                            <b>Total Areas : 12</b>
                                <Table className={classes.Table} striped>
                                    <tbody>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Area Name</th>
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Mg Road</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt"/>
                                                </Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Mg Road</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt"/>
                                                </Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Mg Road</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt"/>
                                                </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
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

export default ViewArea;