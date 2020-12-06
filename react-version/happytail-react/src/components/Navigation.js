import React from 'react';
import {
    Link
  } from "react-router-dom";
  
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import logo from "../images/logo/bignavlogo.png";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    container: {
      position: "sticky",
      textAlign: "center",
      backgroundColor: "#1B110C",
      color: "white",
      minHeight: "20%",
      border: "1px solid red",
    }, 
    navigationLeft: {

    },
    logo: {
        position: "absolute",
        width: "30%",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -50%)",    }
  }));

const Navigation = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            </div>
            <p>Placeholder</p>
            <img className={classes.logo} src={logo} />
            <div>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            </div>

        </Container>
    )
}

export default Navigation;