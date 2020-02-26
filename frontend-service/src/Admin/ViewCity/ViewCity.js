import React from 'react';
import classes from './ViewCity.module.css';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import { Container, Row, Col, Form, FormGroup, Label, Input, Table, Badge } from 'reactstrap';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../Footer/Footer';
class ViewCity extends React.Component {
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
                        <DashboardPage icon="university" name="View City Details" />
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
                                        <Input type="select" id="country" name="country">
                                            <option value="India">India</option>
                                            <option value="Pakistan">Pakistan</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="state" className={classes.Label}>State Name</Label>
                                        <Input type="select" id="state" name="state">
                                            <option value="Delhi">Delhi</option>
                                            <option value="Lahore">Lohore</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="View Cities" className="btn btn-danger" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col xs="6">
                            <b>Total Cities : 12</b>
                            <Table className={classes.Table} striped>
                                    <tbody>
                                        <tr>
                                            <th>S.No</th>
                                            <th>City Name</th>
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Rudrapur</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt"/>
                                                </Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Gurgaon</td>
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
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ViewCity;