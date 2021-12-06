

import React, { useEffect, useState, } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { getCategory, getCategoriesChild } from "../../actions/category";
import { connect } from "react-redux";
import "./shareGift.scss";
import axios from "axios"
import serchByCategoryChild from "../serchByCategoryChild/serchByCategoryChild";
import { postGift } from '../../actions/gift';
import { useHistory } from "react-router-dom";
import { Select, Input, Form } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import UploadPhotos from "../functions/UploadPhotos";
// import PhotoSearch from "../search/photoSearch";
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
    // if (!localStorage.getItem("user")) {

    //     // history.push('/entry');
    // }
    const [isUser, setIsUser] = useState(true);

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("user")))
            setIsUser(false)
    }, [])

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
            history.push('MyShare')
        }).catch(err => { debugger; console.log("ההוספה לא הצליחה"); })
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
        isUser ?<>
            <div className="allDiv">
                <h1 className="h1Upload">טופס למילוי הוספת תמונת מתנה לאתר</h1>
                <Form className="formo">

                    <Form.Input
                        placeholder='שם מתנה'
                        type="text"
                        onChange={(e) => { handleNameGift(e) }}
                    />
                    <br />
                    <Form.Input
                        placeholder='הערות על המתנה'
                        type="text"
                        onChange={(e) => { remark = e.target.value }}
                    />
                    <br />
                    <label className="picName">בחר\י קטגוריה</label>

                    <select placeholder="בחר קטגוריה" onChange={(e) => { setSubCategory(e) }}>
                        {props.arr.map((item) => {
                            return (
                                <option value={item._id} key={item._id}>{item.nameCategory}</option>
                            )
                        })}
                    </select>
                    <br />
                    <br />
                    <select onChange={(e) => { handleChange(e) }} placeholder="בחר תת קטגוריה">
                        {

                            arrDropDown ? arrDropDown.map((item) => {
                                return (
                                    <option value={item._id} key={item._id}>{item.nameCategory}</option>

                                )
                            }) : null}
                    </select>
                    <br />

                    <label className="picName"> בחר\י אופי</label>
                    <select onChange={(e) => { handleChangeCharacter(e) }}>
                        <option value={"ביישן"}>ביישן </option>
                        <option value={"שקט"}>שקט</option>
                        <option value={"חברותי"}>חברותי</option>
                        <option value={"רועש"}>רועש</option>
                    </select>
                    <br />
                    <br />

                </Form>
                {/* <div className="divBefor">
                    <label className="picName" >שם מתנה</label>
                    <input className="input2" type="text" onChange={(e) => { handleNameGift(e) }}></input>
                    <br />
                    <label className="picName"> הערות על המתנה</label>
                    <input className="input1" onChange={(e) => { remark = e.target.value }}></input>
                </div> */}

                {/* <label className="picName">בחר\י סוג</label>
                <select>
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
                </select> */}


                {/* <br></br>
                <div>

                    <label className="picName"> בחר\י אופי</label>
                    <select onChange={(e) => { handleChangeCharacter(e) }}>
                        <option value={"ביישן"}>ביישן </option>
                        <option value={"שקט"}>שקט</option>
                        <option value={"חברותי"}>חברותי</option>
                        <option value={"רועש"}>רועש</option>
                    </select>
                </div> */}



                {/* טווח גילאים */}
                <div>
                    <div style={{
                        margin: 'auto',
                        display: 'block',
                        width: 'fit-content',
                        color: ' #81005F'
                    }}>
                        <h3 className="picName">טווח גילאים:</h3>
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
                {/* טווח מחירים */}
                <div>
                    <div style={{
                        margin: 'auto',
                        display: 'block',
                        width: 'fit-content',
                        color: " #81005F"
                    }}>
                        <h3 className="picName">טווח מחירים</h3>
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

                <button className="button button1" onClick={handleSubmit}>אישור</button>
            </div>
            <br/>
            </> :
            <div className='nologed'>
                אינך מחובר
                <Link to="entry">להתחברות</Link>
            </div>


    );
}

const myMapToProps = (state) => {
    return {
        arr: state.categoryPart.categoryArr

    }
}
export default connect(myMapToProps, { getCategory, getCategoriesChild, postGift })(ShareGift);


