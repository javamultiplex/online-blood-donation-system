import React from 'react';
import classes from './DashboardPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashboardPage = (props) => {
    return (
        <>
            <div className={classes.PageHeading}>
                <h4><FontAwesomeIcon icon={props.icon} className={classes.FontAwesomeIcon}/>{props.name}</h4>
            </div>
            <hr className={classes.hr} />
        </>
    );
}

export default DashboardPage;