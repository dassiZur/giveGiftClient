import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from "react-redux";
import { getGreetingCard } from "../../../actions/greetingCard"
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import axios from "axios"
import Logo from '../../logo/logo';
import Entry from '../../entry/entry';
import GreetingCard from '../greetingCard';
import './subHeader.scss'


const SubHeader = (props) => {

    const [arrChildren, setArrChildren] = useState(null);
    const [item1, setitem1] = useState("");
    // var item1 = "";
    const { url, path } = useRouteMatch();
    const url1=url+"s";
    console.log(path);
    const func = (x) => {
   debugger
        setitem1(x) ;
    }
    useEffect(() => {
        // props.getGreetingCard();

        axios.get("http://localhost:5000/greetingCards/getCategoryName").then(succ => {
            setArrChildren(succ.data)
        });


    }, [])
    return (<>
        <Navbar bg="light" expand="lg" className="navbar1">
            <Container className="container">
                <Nav className="me-auto">
                    {arrChildren && arrChildren.map((item, index) => {
                        return (<div key={index}>
                            <Nav.Link  as={Link} to={`/${url.substring(1,13)+"s"}/${item}`} onClick={() => {
                                func(item);
                            }}  >
                                {item}

                                {/* <GreetingCard GtGreetingCardByCategoryId={item}></GreetingCard> */}
                            </Nav.Link>

                        </div>)
                    })}
                </Nav>
            </Container>
        </Navbar>
        {console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj " + item1)}
        <GreetingCard category={item1}></GreetingCard>
    </>
    );

}

const myMapToProps = (state) => {
    return { arr: state.greetingCardPart.greetingCardArr }
}
export default connect(myMapToProps, { getGreetingCard })(SubHeader);


