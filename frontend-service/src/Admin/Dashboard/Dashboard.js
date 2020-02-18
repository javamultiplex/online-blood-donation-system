import React from 'react';
import classes from './Dashboard.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Dashboard = (props) => {
    return (
        <>
            <div className={classes.PageHeading}>
                <h4><FontAwesomeIcon icon="tachometer-alt" className={classes.FontAwesomeIcon}/>Dashboard</h4>
            </div>
            <hr className={classes.hr} />
        </>
    );
}

export default Dashboard;