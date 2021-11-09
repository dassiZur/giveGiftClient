import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getBusinessOwner } from "../../actions/businessOwner";
import BusinessOwner from "../businessOwner/businessOwner";
import { connect } from "react-redux";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import "./stores.scss";
import OneStore from "./oneStore/oneStore";

const Store = (props) => {
    useEffect(() => { props.getBusinessOwner() }, [])
    var item1 = "";
    const func = (x) => {
        item1 = x;
    }
    return (<>
        <div>
            <h1>רשימת החניות</h1>
            {props.arr.map((item) => {
                return (<div key={item._id}>
                    <Link  to={`/Stores/${item.nameBusinessOwner}`} onClick={() => {
                        func(item);
                    }}  >
                        {item.nameBusinessOwner}
                    </Link>
{/*                   
                        <Route  path={`/Stores/${item.nameBusinessOwner}`} >
                                <OneStore getOneStore={item1}></OneStore>
                        </Route> */}
                
                    {/* <Carousel 
                    timeout={100}
                    animation={"slide"}
                    cycleNavigation={true}>
                        {item.photoAdvertising.map((img, i) => {
                            let im = "http://localhost:5000/" + img.imageUrl;
                            return <img className="myimg" key={i} src={im}></img>
                        })}
                    </Carousel> */}
                </div>)

            })}
        </div>
     {/* <OneStore getOneStore={item1}></OneStore> */}
    </>

    );

}


const myMapToProps = (state) => {
    return { arr: state.businessOwnerPart.businessOwnerArr }
}
export default connect(myMapToProps, { getBusinessOwner })(Store);

