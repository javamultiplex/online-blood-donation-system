import React from 'react';
import {
    Form,
    Label,
    FormGroup,
    Input
} from 'reactstrap';
import classes from './SearchBox.module.css';
const SearchBox = (props) => {
    return (
        <Form className={classes.Form}>
            <FormGroup>
                <Label for="search" className={classes.Label}>Search Text</Label>
                <Input type="text" name="search" id="search" />
            </FormGroup>
        </Form>
    );

}

export default SearchBox;