import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import Footer from '../../Footer/Footer';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Table,
    Label,
    Badge,
    Button
} from 'reactstrap';
import classes from './AddCountry.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AddCountry extends React.Component {
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
                        <DashboardPage icon="university" name="Add Country" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <Row>
                            <Col xs="6">
                                <Form className={classes.Page}>
                                    <FormGroup>
                                        <Label for="inputBox" className={classes.Label}>Country Name</Label>
                                        <Input type="text" id="inputBox" name="inputBox" required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" value="Add Country" className="btn btn-danger" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col xs="6">
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Country Name</th>
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>India</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt"/></Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>India</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt"/></Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>India</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt"/></Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>India</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt"/></Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>India</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}><FontAwesomeIcon icon="trash-alt"/></Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button color="danger" className={classes.Button}>View All</Button>
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

export default AddCountry;