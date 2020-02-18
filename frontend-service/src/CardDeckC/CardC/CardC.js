import React from 'react';
import classes from './CardC.module.css';
import {
    Card,
    CardImg,
    CardText,
    CardTitle,
    CardBody,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const CardC = (props) => {
    return (
        <Card>
            <CardImg top width="100%" src={props.imageUrl} alt={props.imageAlt} />
            <CardBody>
                <CardTitle className={classes.CardTitle}>{props.cardTitle}</CardTitle>
                <CardText>{props.cardText}</CardText>

                <Button className={props.hide ? classes.ButtonHide : classes.ButtonShow}>
                    <NavLink to={props.buttonUrl} className={classes.NavLink}>{props.buttonText}</NavLink>
                </Button>
            </CardBody>
        </Card>
    );
}

export default CardC;