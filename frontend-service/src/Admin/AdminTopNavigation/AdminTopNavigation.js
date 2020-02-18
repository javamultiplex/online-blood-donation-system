import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    Collapse
} from 'reactstrap';
import NavigationLink from '../../Navigation/NavigationLink/NavigationLink';
import classes from './TopNavigation.module.css';
import {NavLink as RouterNavLink} from 'react-router-dom';
class AdminTopNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState => (
            {
                isOpen: !prevState.isOpen
            }
        ))
    }
    render() {
        return (
            <div>
                <Navbar className={classes.navbar} fixed="top" expand="md">
                    <NavbarBrand tag={RouterNavLink} to="/" className={classes.navbarBrand}>Online Blood Bank Management System</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavigationLink iconName="tachometer-alt" linkTitle="Dashboard" url="/admin"/>
                            <NavigationLink iconName="sign-out-alt" linkTitle="Logout" url="#"/>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AdminTopNavigation;