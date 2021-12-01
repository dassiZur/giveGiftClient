import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from "react-redux";
import { getCategory } from "../../actions/category"
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import About from '../about/about';
import Logo from '../logo/logo';
import SerchByCategoryChild from '../serchByCategoryChild/serchByCategoryChild';
import BusinessOwner from "../businessOwner/businessOwner";
import ExactSerarch from "../exactSerarch/exactSerarch";
import GreetingCard from "../greetingCard/greetingCard";


import './menu.scss';

const Menu = (props) => {

    const [arrChildren, setArrChildren] = useState(null);
    const GetAllCategoriesChild = () => {
        axios.get("http://localhost:5000/categories/" + props.idCategoryChild).then(succ => setArrChildren(succ.data));
    }
    useEffect(() => {
        props.getCategory(); GetAllCategoriesChild();
    }, [])
    function handleClick(e) {
        e.preventDefault();

        console.log('The link was clicked.');
    }
    return (
        <Navbar bg="light" expand="lg" className="navbarM">
            <Container className="container">

                {/* <Navbar.Brand as={Link} to="/About" className="NavbarBrand" >אודות</Navbar.Brand>   */}
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/About" >אודות</Nav.Link>
                    <Nav.Link as={Link} to="/getStepContent" >בעלי עסקים לפרסומות</Nav.Link>
                    {/* <Nav.Link as={Link} to="/ExactSerarch">חיפוש מדויק</Nav.Link> */}
                    <Nav.Link as={Link} to="/greetingCard">כרטיסי ברכה</Nav.Link>
                    <Nav.Link as={Link} to="/Store">חנויות</Nav.Link>
                    <Nav.Link as={Link} to="/ShareGift">שתפו במתנה</Nav.Link>
                    <Nav.Link as={Link} to="/Try">try</Nav.Link>
                    <Nav.Link as={Link} to="/ChoseCategories">
                    בחירת קטגוריה
                    </Nav.Link>

{/*  
                    <NavDropdown className="NavDropdown" title="בחירת קטגוריה" id="basic-nav-dropdown">

                        {props.arr.map((item) => {

                            return (<div key={item._id}>

                                <NavDropdown title={item.nameCategory} id="basic-nav-dropdown" as={Link} to="{`/SerchByCategory/${item.nameCategory} `}">
                                    <SerchByCategoryChild idCategoryChild={item._id}></SerchByCategoryChild>

                                </NavDropdown>

                            </div>)
                        })}
                    </NavDropdown>*/}

                </Nav>
                <Nav.Link as={Link} to="/Logo">
                    <Logo></Logo>
                </Nav.Link>
            </Container>

        </Navbar>

    );
}

const myMapToProps = (state) => {
    return { arr: state.categoryPart.categoryArr }
}
export default connect(myMapToProps, { getCategory })(Menu);


