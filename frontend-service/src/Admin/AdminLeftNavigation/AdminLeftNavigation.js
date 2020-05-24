import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './AdminLeftNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class AdminLeftNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            settingsTab: false
        }
    }

    toggleSettingsTab = (props) => {
        this.setState(prevState => (
            {
                settingsTab: !prevState.settingsTab
            }

        ))
    }

    render() {
        const settings = (
            <>
                <div className={classes.tab} onClick={() => {
                    this.props.history.push("/admin/add-country")
                }}>
                    <p ><FontAwesomeIcon icon="plus" /> Add Country</p>
                </div>
                <div className={classes.tab} onClick={() => {
                    this.props.history.push("/admin/add-state")
                }}>
                    <p ><FontAwesomeIcon icon="plus" /> Add State</p>
                </div>
                <div className={classes.tab} onClick={() => {
                    this.props.history.push("/admin/add-city")
                }}>
                    <p ><FontAwesomeIcon icon="plus" /> Add City</p>
                </div>
                <div className={classes.tab} onClick={() => {
                    this.props.history.push("/admin/add-area")
                }}>
                    <p ><FontAwesomeIcon icon="plus" /> Add Area</p>
                </div>
            </>
        );

        return (
            <>
                <div className={classes.tab} onClick={() => {
                    this.props.history.push("/admin")
                }}>
                    <p><FontAwesomeIcon icon="envelope" /> Inbox</p>
                </div>
                <div className={classes.tab} onClick={() => {
                    this.props.history.push("/admin/active-donors")
                }}>
                    <p><FontAwesomeIcon icon="users" /> Active Donors</p>
                </div>
                <div className={classes.tab} onClick={() => {
                    this.props.history.push("/admin/not-active-donors")
                }}>
                    <p><FontAwesomeIcon icon="users" /> Not Active Donors</p>
                </div>
                <div className={classes.tab} onClick={() => {
                    this.props.history.push("/admin/need-blood")
                }}>
                    <p ><FontAwesomeIcon icon="bed" /> Need Blood</p>
                </div>
                <hr className={classes.hr} />
                <div className={classes.settings} onClick={this.toggleSettingsTab}>
                    <p ><FontAwesomeIcon icon="cogs" /> Settings</p>
                </div>
                {
                    this.state.settingsTab ? settings : ""
                }
                <hr className={classes.hr} />
            </>
        );
    }

}

export default withRouter(AdminLeftNavigation);