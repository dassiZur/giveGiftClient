import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { getGreetingCard } from "../../actions/greetingCard";
import BusinessOwner from "../businessOwner/businessOwner";
import { connect } from "react-redux";
// import SerchByCategoryChild from '../serchByCategoryChild/serchByCategoryChild';
import About from "../about/about";
import GreetingCardPhoto from "../greetingCardPhoto/greetingCardPhoto";
import SubHeader from "./subHeader/subHeader";
import serchByCategoryChild from "../serchByCategoryChild/serchByCategoryChild";
import axios from "axios"

import './greetingCard.scss'

const GreetingCard = (props) => {
    const [arrGreetingCardsById, setGreetingCardsById] = useState(null);
    const { id } = useParams();
    const funcGetById = (category) => {
        axios.get(`http://localhost:5000/greetingCards/${category}`).then(succ => {
            setGreetingCardsById(succ.data)
        });
    }
    useEffect(() => {
        console.log("jjjjjj0----- "+id)
        props.getGreetingCard()
        funcGetById(id);
    }, [props.category])
    console.log("oooooooooooo")
   
    return (<>
         { id?    
        <div>
            {arrGreetingCardsById&&arrGreetingCardsById.map((obj) => {
          
                let im = "http://localhost:5000/" + obj.path;
                console.log("item.path+  " + obj.path)
           
                    return (<>
                        <div key={id._id} className='cardiv'>
                            <img className="imgCards" src={im}></img>
                        </div></>)

            })
            }
        </div>:<div>
           {props.arr.map((obj) => {
               
               let im = "http://localhost:5000/" + obj.path;
               console.log("item.path+  " + obj.path)
          
                   return (
                       <div >
                           <img className="imgCards" src={im}></img>
                       </div>)

           })}
        </div>}

    </>
    );
}

const myMapToProps = (state) => {
    console.log("llllllllllllllll");

    return {
        arr: state.greetingCardPart.greetingCardArr
    }
}
export default connect(myMapToProps, { getGreetingCard })(GreetingCard);

