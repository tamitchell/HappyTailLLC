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
      padding: "20px",
      minHeight: "50px",
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-evenly"
    }, 
    navigationLeft: {
      padding: "0 3%",
      width: "30%"

    },
    navigationRight: {
      padding: "0 3%",
      width: "30%"

    },
    navLink: {
      padding: "0 5%",
      margin: "0 20px",
      color: "white",
      textDecoration: "none",
      textTransform: "uppercase"
    },
    placeholder: {
      width: "30%"
    },
    logo: {
        position: "absolute",
        width: "10%",
        top: "120%",
        left: "50%",
        transform: "translate(-50%, -50%)",    }
  }));

const Navigation = () => {
    const classes = useStyles();
    return (
        <Container 
        maxWidth={false} 
        className={classes.container}
        >
            <div className={classes.navigationLeft}>
            <Link className={classes.navLink} to="/">Home</Link>
            <Link className={classes.navLink} to="/services">Services</Link>
            <Link className={classes.navLink} to="/pricing">Pricing</Link>
            </div>
            <div className={classes.placeholder} aria-hidden="true">Placeholder</div>
            <img className={classes.logo} src={logo} alt="Navigate to Main Page"/>
            <div className={classes.navigationRight}>
            <Link className={classes.navLink} to="/blog">Blog</Link>
            <Link className={classes.navLink} to="/about">About</Link>
            <Link className={classes.navLink} to="/contact">Contact Us</Link>
            </div>

        </Container>
    )
}

export default Navigation;