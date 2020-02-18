import React from 'react';
import {
    FormGroup,
    Label,
    Form,
    Input,
    Container,
    Row,
    Col
} from 'reactstrap';
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
import classes from './LogIn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';
class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = (event) => {
        const { username, password } = this.state;
        alert(`Username : ${username} , Password : ${password}`);
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <TopNavigation />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.Login}>
                            <h1 className={classes.formHeading}>
                                <FontAwesomeIcon className={classes.FontAwesomeIcon} icon="user"/>
                                Admin Login
                                </h1>
                            <Form className={classes.Form} onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <FontAwesomeIcon icon="envelope" className={classes.FontAwesomeIcon} />
                                    <Label className={classes.Label} >Username</Label>
                                    <Input type="text"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.handleUsername}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <FontAwesomeIcon icon="lock" className={classes.FontAwesomeIcon} />
                                    <Label className={classes.Label}>Password</Label>
                                    <Input type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handlePassword}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="submit"
                                        value="Login Here"
                                        className="btn-lg btn-danger"></Input>
                                </FormGroup>
                            </Form>
                        </div>
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

export default LogIn;