import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getBusinessOwner } from "../../actions/businessOwner";
import { connect } from "react-redux";
import "./stores.scss";
// import { Checkbox } from "@material-ui/core";

const Store = (props) => {
    useEffect(() => { props.getBusinessOwner() }, [])
    const areaList = ['מרכז', 'ירושלים', 'דרום', 'צפון', 'חיפה', 'תל אביב']
    const [areaArr, setAreaArr] = useState([]);
    const [stores, setStores] = useState([]);
    useEffect(() => {
        // if (areaArr.length==0 )
        //     setStores(...props.arr)
        // else{
        //     let u= props.arr.filter((st)=>{return areaArr.includes(st.area) })
        //     setStores(u)
        // }
        submitFilter()
    }, [props.arr])

    function chechedArea(areaName) {
        if(areaArr.includes(areaName)){
        //    let arry = areaArr.filter(item => item !== areaName)
           setAreaArr(areaArr.filter(item => item !== areaName))
        }
        else
        setAreaArr([...areaArr, areaName])
    }
    function submitFilter() {
        if (areaArr == [] || areaArr.length == 0 || areaArr == undefined) {
            setStores(props.arr)
        }
        else {
            let u= props.arr.filter((st)=>{return areaArr.includes(st.area) })
            // let u = props.arr.map((st) => { return areaArr.includes(st.area) && st })
            setStores(u)
        }
    }
    return (<>
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-7">
            <h1 style={{ fontFamily: 'inherit', paddingTop: '2%' }}>חנויות בכל הארץ</h1>
            </div>

            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="cardd">
                        <h4>סינון אזור</h4>
                        {/* <Checkbox /> */}
                        <div className="area-list">
                        {areaList.map((item, index) => {
                            return (<>
                                <input type="checkbox" id={"cb" + index} value={item} onChange={(e) => chechedArea(item)} />
                                <label htmlFor={"cb" + index}>{item}</label>
                                <br />
                            </>)
                        })}
                        </div>
                        <button className='filter-button' onClick={submitFilter}>סנן</button>
                        {/* <input type="checkbox" id="cb1" value="" />
                        <label htmlFor="cb1"> I have a bike</label> */}
                    </div>
                </div>
                <div className="col-md-7">
                    {stores.map((item) => {
                        return (
                            <div className="card-Store-Item" key={item._id}>
                                <Link to={`/Stores/${item.nameBusinessOwner}`} >
                                    <h3> {item.nameBusinessOwner}</h3>
                                </Link>
                                <h4> {item.address}</h4>
                                <h4> {item.phone}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* {props.arr.map((item) => {
                return (
                    <div className="card-Store-Item" key={item._id}>
                        <Link to={`/Stores/${item.nameBusinessOwner}`} >
                            <h3> {item.nameBusinessOwner}</h3>
                        </Link>
                        <h4> {item.address}</h4>
                        <h4> {item.phone}</h4>
                    </div>
                )
            })} */}
        </div>
    </>
    );
}

const myMapToProps = (state) => {
    return { arr: state.businessOwnerPart.businessOwnerArr }
}
export default connect(myMapToProps, { getBusinessOwner })(Store);

//         {/* <OneStore getOneStore={item1}></OneStore> */}
{/*   
            // var item1 = "";
    // const func = (x) => {
    //     item1 = x;
    // }                
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
