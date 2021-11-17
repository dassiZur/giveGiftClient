import businessOwner from "../businessOwner/businessOwner"
// import NewUser from "../newUser/newUser"
// import { Link } from 'react-router-dom'
// import { Route, BrowserRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../header/header"
import menWithGifts from './photoHomePage/menWithGifts.jpg'
import partGreen from './photoHomePage/partGreen.png'
import Entry from "../entry/entry";
import Menu from "../menu/menu";
import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './homePage.scss'

const HomePage = () => {
    const history = useHistory();
    const button = {
        "backgroundColor": "#81005F", "color": "white", "minWidth": "160px", "lineHeight": "1.50",
        "borderRadius": "30px", "marginLeft": "3.2vw", "marginTop": "22vh", "fontFamily": "guttmanYadBrush",
         "min-width": "150px;","fontSize": "25px !important;"
    };
    // "font-size": "1.5vw !important;",
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    return (<div className="overflow">
        {/* <Header></Header>   */}
        {/* <Menu></Menu> */}
        <div className="imgPartGreen">
            <div className="arrowLeft"></div>

            <p className="p"> רכישת רעיונות למתנה בצורה הכי יעילה ואפקטיבית
        <br />
                כדי שרק תרצו לתת</p>

            {
                <button style={button} onClick={() => history.push('/entry')}>
                    כניסה
              </button>}

            {<button style={button} onClick={() => history.push('/NewUser')}>
                הרשמה
            </button>}

            {/* 
            <Router>
                <Link to="/Entry"  target="_blank">
                    <Button style={button}>כניסה</Button>
                </Link>
                <Route path="/Entry">
                    <Entry></Entry>
                </Route>

                <Link to="/NewUser"  target="_blank">
                    <Button style={button}>הרשמה</Button>
                </Link>
                <Route path="/NewUser">
                    <NewUser></NewUser>
                </Route>
            </Router> */}

        </div>

        <img className="imgMenWithGift" src={menWithGifts}></img>

    </div>
    )
}
export default HomePage;




