import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      border: "1px solid red",
    },
  }));

const ContainerComponent = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            {props.props}
            "Hello I am a container"
        </Container>
    )
}

export { ContainerComponent };