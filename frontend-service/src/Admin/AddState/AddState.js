import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import Footer from '../../Footer/Footer';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import classes from './AddState.module.css';
class AddState extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <AdminTopNavigation/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <Dashboard/>
                    </Col>
                    <Col xs="9">
                        <DashboardPage icon="university" name="Add State"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation/>
                    </Col>
                    <Col xs="9">
                        <div className={classes.Page}>
                            State
                        </div>
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

export default AddState;