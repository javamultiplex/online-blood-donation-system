import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import classes from './BreadcrumbC.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BreadcrumbC = (props) => {
    return (
        <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem
                className={props.match.path==='/register'?classes.BreadcrumbItemHighlighted:classes.BreadcrumbItem}
                    tag="a"
                    onClick={
                        () => props.history.push('/register')}>
                    <FontAwesomeIcon
                        icon="user-plus"
                        className={classes.FontAwesomeIcon} />Donor Registration
                        </BreadcrumbItem>
                <BreadcrumbItem
                className={props.match.path==='/need-blood'?classes.BreadcrumbItemHighlighted:classes.BreadcrumbItem}
                    tag="a"
                    onClick={
                        () => props.history.push('/need-blood')}>
                    <FontAwesomeIcon
                        icon="bed"
                        className={classes.FontAwesomeIcon} />Need Blood
                        </BreadcrumbItem>
                <BreadcrumbItem
                    className={props.match.path==='/search-donor'?classes.BreadcrumbItemHighlighted:classes.BreadcrumbItem}
                    tag="a"
                    onClick={
                        () => props.history.push('/search-donor')}>
                    <FontAwesomeIcon
                        icon="search"
                        className={classes.FontAwesomeIcon} />Search Donor
                        </BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default withRouter(BreadcrumbC);