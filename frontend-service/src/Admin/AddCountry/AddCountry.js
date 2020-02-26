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
import axios from 'axios';
import classes from './AddCountry.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AddCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            countries: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:9090/api/v1/country', this.state)
            .then(response => {
                console.log('Response is : ' + JSON.stringify(response.data));
                this.setState({
                    ...this.state,
                    countries: this.state.countries.concat({
                        id: response.data.id,
                        name: response.data.name
                    })
                })
                this.reset();
            })
            .catch(err => {
                console.log(err);
            })
    }

    changeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    reset = () => {
        this.setState({
            name: ''
        })
    }

    deleteCountry = (id) => {
        console.log('id is : ' + id);
        axios.delete('http://localhost:9090/api/v1/country/' + id)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { name } = this.state;
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
                                <Form className={classes.Page} onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label for="inputBox" className={classes.Label}>Country Name</Label>
                                        <Input type="text" id="inputBox" name="inputBox" required onChange={this.changeHandler} value={name}></Input>
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
                                            <th>Country</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            this.state.countries.map((country, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{country.name}</td>
                                                    <td>
                                                        <Badge
                                                            color="danger"
                                                            className={classes.Badge}
                                                            onClick={() => this.deleteCountry(country.id)}>
                                                            <FontAwesomeIcon icon="trash-alt" />
                                                        </Badge>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </Table>
                                <Button color="danger"
                                    className={classes.Button}
                                    onClick={() => this.props.history.push('/admin/view-country')}>View All</Button>
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