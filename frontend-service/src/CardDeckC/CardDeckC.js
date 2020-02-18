import React from 'react';
import {
    CardDeck
} from 'reactstrap';

import CardC from './CardC/CardC';
import registerImg from '../assets/register.jpg';
import searchDonorImg from '../assets/search-donor.png';
import bloodNeededImg from '../assets/blood-needed.jpg';

const CardDeckC = () => {
    return (
        <CardDeck className="mt-3">
            <CardC imageUrl={registerImg}
                imageAlt="Register as donor"
                cardTitle="Donor Registration"
                cardText="Have you at anytime witnessed a relative of yours or close friend searching for blood donor, when blood banks says out of stock, the donors in mind are out of reach and the time keeps ticking? This thought laid our foundation." 
                buttonUrl="/register"
                buttonText="Register Now"/>
            <CardC imageUrl={searchDonorImg}
                imageAlt="Search Donors"
                cardTitle="Search Donor"
                cardText="Some people who have serious injuries they need blood transfusions to replace blood lost during the injury. Regular blood donors ensures that a safe and plentiful supply of blood is available whenever and wherever is needed." 
                buttonUrl="/search-donor"
                buttonText="Search Here"/>

            <CardC imageUrl={bloodNeededImg}
                imageAlt="Blood needed"
                cardTitle="Need Blood"
                cardText="Every 2 seconds someone needs blood. Your blood helps more than one life at a time. Acident victims, premature babies, patients undergoing major surgeries requires whole blood, ˝where your blood after testing is used directly."
                buttonUrl="/need-blood"
                buttonText="Blood Request"/>
        </CardDeck>
    );
}
export default CardDeckC;