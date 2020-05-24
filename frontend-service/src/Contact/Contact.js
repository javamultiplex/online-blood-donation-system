import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Input,
    Label,
    FormGroup
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopNavigation, { } from '../Navigation/TopNavigation/TopNavigation';
import { SocialIcon } from 'react-social-icons';
import Footer from '../Footer/Footer';
import CardC from '../CardDeckC/CardC/CardC';
import classes from './Contact.module.css';
import contactImg from '../assets/contact.jpg';
const Contact = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <TopNavigation />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.RightColumn}>
                            <CardC imageUrl={contactImg}
                                imageAlt="Contact us"
                                cardTitle="Contact Details"
                                cardText={
                                    <>
                                        <FontAwesomeIcon icon="phone" />
                                        <span className={classes.contactDetail}>9997446752</span><br />
                                        <FontAwesomeIcon icon="envelope" />
                                        <span className={classes.contactDetail}>shivaniagarwal857@gmail.com</span><br />
                                        <FontAwesomeIcon icon="globe" />
                                        <span className={classes.contactDetail}>https://apex.ac.in/</span><br />
                                        <SocialIcon network="facebook" url="https://www.facebook.com/javamultiplex" className={classes.SocialIconLeft} />
                                        <SocialIcon network="twitter" url="https://twitter.com/javamultiplex" className={classes.SocialIcon} />
                                        <SocialIcon network="pinterest" url="https://www.pinterest.com/javamultiplex/" className={classes.SocialIcon}/>
                                        <SocialIcon network="instagram" url="https://www.instagram.com/javamultiplex/" className={classes.SocialIcon} />
                                    </>
                                }
                                hide
                                buttonUrl="#" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;