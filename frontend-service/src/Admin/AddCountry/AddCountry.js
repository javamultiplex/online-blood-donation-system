import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import Footer from '../../Footer/Footer';
import {
    addCountry
} from '../../redux/actions/country/addCountry';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import classes from './AddCountry.module.css';
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
        this.props.addCountry(this.state);
        this.setState({
            ...this.state,
            countries: this.state.countries.concat({
                name:this.state.name
            })
        })
        this.reset();
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
                                        </tr>
                                        {
                                            this.state.countries.map((country, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{country.name}</td>
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

const mapDispatchToProps = dispatch => {
    return {
        addCountry: (country) => dispatch(addCountry(country))
    }
};

export default connect(null,mapDispatchToProps)(AddCountry);