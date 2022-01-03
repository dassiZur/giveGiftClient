import React, { useEffect, useState } from "react";
import { getBusinessOwner } from "../../../actions/businessOwner";
import {
  useParams
} from "react-router-dom";
import { connect } from "react-redux";
import "./oneStore.scss";
import axios from "axios";
import StoreDetails from "../storeDetails/storeDetails";
import Carousel from "react-material-ui-carousel";

const OneStore = (props) => {
  const { id } = useParams();
  const [oneStoreDetails, setOnStoreDetails] = useState(null);

  const funcGetById = (nameBusinessOwner) => {
    axios
      .get(`http://localhost:5000/businessOwners/${nameBusinessOwner}`)
      .then((succ) => {
        setOnStoreDetails(succ.data);
      });
  };
  const pirsomot = { marginRight: "450px", textAlign: "left" };
  useEffect(() => {
    console.log(id);
    props.getBusinessOwner();
    funcGetById(id);
  }, []);

  return (
    <>
      <div>
        {oneStoreDetails &&
          oneStoreDetails.map((obj) => {
            console.log("obj.nameBu----------------------sinessOwner");
            console.log(obj.nameBusinessOwner);
            return (
              <>
                <div key={id._id} style={{ paddingBottom: "2%" }}>
                  <div className="det">
                    <label className="DetailsLable">שם העסק:</label>
                    <h1 className="DetailsLable">{obj.nameBusinessOwner}</h1>
                    <br></br>
                    <label className="DetailsLable">מספר טלפון:</label>
                    <h1 className="DetailsLable">{obj.phone}</h1>
                    <br></br>
                    <label className="DetailsLable">כתובת:</label>
                    <h1 className="DetailsLable">{obj.address}</h1>
                    <br></br>
                    {/* <Link to="/Stors/Map" >
                                <h1 className="oo">למפת הגעה לחנות</h1>
                            </Link> */}
                  </div>
                  <div className="det">
                    <Carousel
                      style={pirsomot}
                      timeout={100}
                      animation={"slide"}
                      cycleNavigation={true}
                    >
                      {obj.photoAdvertising.map((img, i) => {
                        let im = "http://localhost:5000/" + img.imageUrl;
                        return (
                          <img className="carusel-myimg" key={i} src={im}></img>
                        );
                      })}
                    </Carousel>
                  </div>
                  <div className="det">
                    <StoreDetails address={obj.address}></StoreDetails>
                  </div>
                </div>
                <div className="gogleMap"></div>
              </>
            );
          })}
      </div>
    </>
  );
};

const myMapToProps = (state) => {
  return { arr: state.businessOwnerPart.businessOwnerArr };
};
export default connect(myMapToProps, { getBusinessOwner })(OneStore);
