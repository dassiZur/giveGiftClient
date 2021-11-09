import React, { useEffect, useState } from "react";
import { getBusinessOwner } from "../../../actions/businessOwner";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./oneStore.scss";
import axios from "axios"
import StoreDetails from "../storeDetails/storeDetails";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Map from "../map";

const OneStore = (props) => {
    const { id } = useParams();
    const [oneStoreDetails, setOnStoreDetails] = useState(null);

    const funcGetById = (nameBusinessOwner) => {
        axios.get(`http://localhost:5000/businessOwners/${nameBusinessOwner}`).then(succ => {
            setOnStoreDetails(succ.data)
        });
    }
    const pirsomot={"marginRight": "450px" ,"textAlign":"left"}
    useEffect(() => {
        console.log(id)
        props.getBusinessOwner()
        funcGetById(id);
    }
        , []);

    return (<>
        <div>
            {oneStoreDetails && oneStoreDetails.map((obj) => {
                console.log("obj.nameBu----------------------sinessOwner")
                console.log(obj.nameBusinessOwner)
                return (<>
                    <div key={id._id}>
                        <div className="det">
                            
                        <h1 className="h">{obj.nameBusinessOwner}</h1>
                        <h2 className="h">{obj.phone}</h2>
                        <h2 className="h">{obj.address}</h2>
                        <Link to="/Stors/Map" >
                        <h1 className="oo">למפת הגעה לחנות</h1>
                        </Link>
                     
                        </div>
                        <Carousel style={pirsomot}
                            timeout={100}
                            animation={"slide"}
                            cycleNavigation={true}>
                            {obj.photoAdvertising.map((img, i) => {
                                let im = "http://localhost:5000/" + img.imageUrl;
                                return <img className="myimg" key={i} src={im}></img>
                            })}
                        </Carousel>
                        <StoreDetails></StoreDetails>
                    </div>
                    <div className="gogleMap"></div>
                    
                </>)

            })
            }
        </div>
    </>
    );
}


const myMapToProps = (state) => {
    return { arr: state.businessOwnerPart.businessOwnerArr }
}
export default connect(myMapToProps, { getBusinessOwner })(OneStore);

