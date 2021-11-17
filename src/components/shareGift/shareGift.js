

import React, { useEffect, useState, } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { getCategory, getCategoriesChild } from "../../actions/category";
import { connect } from "react-redux";
import "./shareGift.scss";
import axios from "axios"
import serchByCategoryChild from "../serchByCategoryChild/serchByCategoryChild";
import { postGift } from '../../actions/gift';
import { useHistory } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import UploadPhotos from "../functions/UploadPhotos";
import PhotoSearch from "../search/photoSearch";
import ImageUploader from "../Photos/photo";

const ShareGift = (props) => {
    useEffect(() => { props.getCategory() }, []);
    const [state, setState] = useState(0);
    const [arrDropDown, setArrDropDown] = useState();
    const [nameGift, setNameGift] = useState("");
    const [character, setCharacter] = useState("");
    const [moveAge, setMoveAge] = React.useState([0, 120]);
    const [movePrice, setMovePrice] = React.useState([0, 1000]);
    const history = useHistory();
    if (!localStorage.getItem("user")) {
        debugger
        history.push('/entry');
    }

    let remark = "";

    const handleSubmit = () => {
        console.log("hhhhhhhhhhhhhhhhhhhf")
        console.log("nameGift" + nameGift + " " + arrDropDown.value)
        let image = localStorage.getItem("image");
        let user = JSON.parse(localStorage.getItem("user"));
        debugger;
        let newGift = {
            "nameGift": nameGift.value,
            "category": state.value,
            "remark": remark, "user": user._id, "gifPhoto": image, "ageRange": moveAge, "price": movePrice, "character": character.value
        }
        axios.post("http://localhost:5000/gifts", newGift).then(succ => {

            alert("מתנה התווסה בהצלחה!!!")
            history.push('try')
        }).catch(err => {debugger; console.log("ההוספה לא הצליחה"); })
    }
    const handleChange = (e) => {
        console.log("e.target.value")
        console.log(e.target.value)
        if (state.state != e.target.value)
            setState({ value: e.target.value });

    }
    const handleChangeCharacter = (e) => {
        if (state.character != e.target.value)
            setCharacter({ value: e.target.value });
        console.log(character)
    }
    const handleNameGift = (e) => {
        if (state.nameGift != e.target.value)
            setNameGift({ value: e.target.value });
    }
    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        if (state.moveAge != newValue)
            setMoveAge(newValue);
        console.log(moveAge[0])
    };
    const rangeSelectorAge = (event, newValue) => {
        if (state.movePrice != newValue)
            setMovePrice(newValue);
    };

    const setSubCategory = (e) => {
        setState({ value: e.target.value });
        if (e.target.value) {
            axios.get(`http://localhost:5000/categories/${e.target.value} `)
                .then(
                    succ => setArrDropDown(succ.data));

        }
        console.log("arrDropDown  " + arrDropDown)
    }
    return (
        <div>

            <div>
                <lable class="picName" > שם תמונה</lable>
                <input class="input1" type="text" onChange={(e) => { handleNameGift(e) }}></input>
            </div>

            <div>
                <lable class="picName"> הערות על המתנה</lable>
                <input class="input1" onChange={(e) => { remark = e.target.value }}></input>
            </div>

            <br></br>
            <lable class="picName" >בחר\י סוג</lable>
            <select onChange={(e) => { setSubCategory(e) }}>
                {props.arr.map((item) => {
                    return (
                        <option value={item._id} key={item._id}>{item.nameCategory}</option>
                    )
                })}
            </select>



            <select onChange={(e) => { handleChange(e) }}>
                {

                    arrDropDown ? arrDropDown.map((item) => {
                        return (
                            <option value={item._id} key={item._id}>{item.nameCategory}</option>

                        )
                    }) : null}
            </select>


            <br></br>
            <div>
                <lable class="picName"> בחר\י אופי</lable>
                <select onChange={(e) => { handleChangeCharacter(e) }}>
                    <option value={"ביישן"}>ביישן </option>
                    <option value={"שקט"}>שקט</option>
                    <option value={"חברותי"}>חברותי</option>
                    <option value={"רועש"}>רועש</option>
                </select>
            </div>

            <br></br>
            <div>
                {/* <UploadPhotos></UploadPhotos> */}
            </div>
            {/* <div class="range-slider">
        <input onChange={(v) => { move(v) }} id="spin" class="range-slider__range" type="range" value={moveAge} min="0" max="120" name="spin"></input>
        <span class="range-slider__value">{moveAge}</span>
    </div> */}
            {/* <body>
        <input style={{marginLeft: moveAge+'px',width:"30%"}} type="range" name="spin" id="spin" step="1" value={moveAge}min="0" max="500" onChange={(v) => { move(v) }} />
        <div id="test"><h3>I want move with range {moveAge} ):</h3></div>
    </body> */}

            <div>
                <div style={{
                    margin: 'auto',
                    display: 'block',
                    width: 'fit-content',
                    color: ' #81005F'
                }}>
                    <h3>טווח גילאים:</h3>
                    <Typography id="range-slider" gutterBottom>
                        בחר גיל בין טווח הגילאים הבאים:
                    </Typography>
                    <Slider
                        value={moveAge}
                        onChange={rangeSelector}
                        valueLabelDisplay="auto"
                        min={0}
                        max={120}

                    />
                    טווח הגיל בין: {moveAge[0]}  ל - {moveAge[1]}
                </div>
            </div>
            <br></br>
            <br></br>
            <div>
                <div style={{
                    margin: 'auto',
                    display: 'block',
                    width: 'fit-content',
                    color: " #81005F"
                }}>
                    <h3>טווח מחירים</h3>
                    <Typography id="range-slider" gutterBottom>
                        בחר מחיר בין טווח המחירים הבאים:
                    </Typography>
                    <Slider
                        value={movePrice}
                        onChange={rangeSelectorAge}
                        valueLabelDisplay="auto"
                        min={1}
                        max={1000}
                    />
                    טווח המחירים בין: {movePrice[0]}  ל - {movePrice[1]}
                </div>
            </div>

            <br></br>
            <ImageUploader></ImageUploader>
            <br></br>

            <button class="button button1" onClick={handleSubmit}>אישור</button>
        </div>


    );
}

const myMapToProps = (state) => {
    return {
        arr: state.categoryPart.categoryArr

    }
}
export default connect(myMapToProps, { getCategory, getCategoriesChild, postGift })(ShareGift);


