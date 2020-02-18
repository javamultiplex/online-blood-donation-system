import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

const items = [
    {
        src: image1,
        altText: 'Banner 1',
        caption: ''
    },
    {
        src: image2,
        altText: 'Banner 2',
        caption: ''
    },
    {
        src: image3,
        altText: 'Banner 3',
        caption: ''
    },
    {
        src: image4,
        altText: 'Banner 4',
        caption: ''
    },
    {
        src: image5,
        altText: 'Banner 5',
        caption: ''
    },
    {
        src: image6,
        altText: 'Banner 6',
        caption: ''
    }
];

const Carousel = () => {
    return (
        <UncontrolledCarousel items={items} controls={false} />
    );
}

export default Carousel;