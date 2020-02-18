import React from 'react';
import { Media } from 'reactstrap';
import classes from './MediaC.module.css';
const MediaC = (props) => {
    return (
        <Media className="mt-5">
            <Media left>
                <Media object src={props.image}
                    className={props.mediaObjectClassName}
                    alt={props.imageAlt} />
            </Media>
            <Media body className={classes.MediaBody}>
                <Media heading className={classes.MediaHeading}>
                    {props.heading}
                </Media>
                {props.body}
            </Media>
        </Media>
    );
}
export default MediaC;