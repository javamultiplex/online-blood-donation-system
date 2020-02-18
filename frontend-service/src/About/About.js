import React from 'react';
import classes from './About.module.css';
import TopNavigation, { } from '../Navigation/TopNavigation/TopNavigation';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Footer from '../Footer/Footer';
import MediaC from '../MediaC/MediaC';
import bloodDonationImg from '../assets/blood-donation.jpg';
import bloodBankImg from '../assets/blood-bank.jpg';
import bloodTypesImg from '../assets/blood-types.png';
const About = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <TopNavigation />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.About}>
                        <MediaC image={bloodDonationImg}
                            imageAlt="Blood Donation"
                            heading="Blood Donation"
                            mediaObjectClassName={classes.MediaObject}
                            body="A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation (separation of whole-blood components). Donation may be of whole blood, or of specific components directly (the latter called apheresis). Blood banks often participate in the collection process as well as the procedures that follow it." />

                        <MediaC image={bloodBankImg}
                            imageAlt="Blood Bank"
                            heading="Blood Bank"
                            mediaObjectClassName={classes.MediaObject}
                            body="A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term 'blood bank' typically refers to a division of a hospital where the storage of blood product occurs and where proper testing is performed (to reduce the risk of transfusion related adverse events). However, it sometimes refers to a collection center, and indeed some hospitals also perform collection." />

                        <MediaC image={bloodTypesImg}
                            imageAlt="Blood Type"
                            heading="Blood Type"
                            mediaObjectClassName={classes.MediaObject}
                            body="A blood type (also called a blood group) is a classification of blood, based on the presence and absence of antibodies and inherited antigenic substances on the surface of red blood cells (RBCs). These antigens may be proteins, carbohydrates, glycoproteins, or glycolipids, depending on the blood group system. Some of these antigens are also present on the surface of other types of cells of various tissues. Several of these red blood cell surface antigens can stem from one allele (or an alternative version of a gene) and collectively form a blood group system. Blood types are inherited and represent contributions from both parents. A total of 36 human blood group systems and 346 antigens are now recognized by the International Society of Blood Transfusion (ISBT)." />
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
    );
}

export default About;