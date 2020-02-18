import React from 'react';
import {
    NavItem,
    NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as RouterNavLink } from 'react-router-dom';
import classes from './NavigationLink.module.css';

const NavigationLink = (props) => {
    return (
        <NavItem>
            <NavLink tag={RouterNavLink} to={props.url} className={classes.navlink} activeClassName={classes.active} >
                <FontAwesomeIcon icon={props.iconName} className={classes.FontAwesomeIcon} />
                {props.linkTitle}
            </NavLink>
        </NavItem>
    );
}

export default NavigationLink;