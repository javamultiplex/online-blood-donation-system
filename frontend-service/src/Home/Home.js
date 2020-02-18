import React from 'react';
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';
import Carousel from '../Carousel/Carousel';
import CardDeckC from '../CardDeckC/CardDeckC';
import { Row, Container, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import classes from './Home.module.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className={classes.TopNavigation}>
                                <TopNavigation />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={classes.Col}>
                            <Carousel />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h1 className={classes.PageHeading}>Online Blood Bank Management System</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardDeckC />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr/>
                            <Footer/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;