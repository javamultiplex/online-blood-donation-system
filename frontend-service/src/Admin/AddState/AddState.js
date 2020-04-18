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
    Label,
    Input,
    Table,
    Badge,
    Button
} from 'reactstrap';
import classes from './AddState.module.css';
import { connect } from 'react-redux';
import { getAllCountries } from '../../redux/actions/country/getAndDeleteCountry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AddState extends React.Component {

    componentDidMount() {
        this.props.getAllCountries();
    }

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
                        <DashboardPage icon="university" name="Add State" />
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
                                        <Label for="country" className={classes.Label}>Country Name</Label>
                                        <Input type="select" name="country" id="country" required>
                                        {
                                            this.props.countries.map((country,index) => 
                                            <option key={index} value={country.id}>{country.name}</option>)
                                        }
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="state" className={classes.Label}>State Name</Label>
                                        <Input type="text" name="state" id="state" required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" className="btn btn-danger" value="Add State" />
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
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>India</td>
                                            <td>Delhi</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt" />
                                                </Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>India</td>
                                            <td>Rajasthan</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt" />
                                                </Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Pakistan</td>
                                            <td>Karachi</td>
                                            <td>
                                                <Badge color="danger" className={classes.Badge}>
                                                    <FontAwesomeIcon icon="trash-alt" />
                                                </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button
                                    color="danger"
                                    onClick={() => this.props.history.push('/admin/view-state')}
                                    className={classes.Button}>
                                    View All
                                </Button>
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

const mapStateToProps = state => {
    return {
        countries: state.getAndDeleteCountry.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddState);