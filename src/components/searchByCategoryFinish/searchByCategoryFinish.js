import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { getCategory } from "../../actions/category";
import { connect } from "react-redux";
import axios from "axios"
import Gallery from '../search/gallery';

import { expressionStatement } from "@babel/types";
import './searchByCategoryFinish.scss'

const SerchByCategoryChildFinish = (props) => {


    // //פונקציה שמביאה מהשרת את כל התתי קטגוריות
    const [giftsArr, setGiftsArr] = useState([]);
    // const [giftsArr2, setGiftsArr2] = useState([]);
    const GetGiftsByCategoryId = async () => {
        const id = props.match.params.id;
        debugger;
        axios.get(`http://localhost:5000/gifts/getByIdCategory/${id}`).
            then(succ => {

                // var arrImg = [];
                // succ.data.forEach(element => {
                //     let im = "http://localhost:5000/" + element.gifPhoto;
                //     arrImg.push({
                //         src: im,
                //         thumbnail: im,
                //         thumbnailWidth: 320,
                //         thumbnailHeight: 212,
                //         caption: element.nameGift
                //     })
                // });
                // setGiftsArr(arrImg);
                setGiftsArr(succ.data);

                // axios.get(`http://localhost:5000/gifts/getByIdParentCategory/${id}`).
                //     then(succ => {
                //         console.log("TAMAR REVIVOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
                //         setGiftsArr2(succ.data)
                //     }).
                //     catch(error => console.log(error));
            }).
            catch(error => console.log(error));
    }
    useEffect(() => {
        GetGiftsByCategoryId();
    }, []);
    return (<>
        {giftsArr && giftsArr.length ?

            <Gallery giftsArr={giftsArr} /> :
            <h2>לא קיימות מתנות בקטגוריה זו</h2>

            //         giftsArr.map((item, index) =>
            //             {
            //    let im = "http://localhost:5000/" + item.gifPhoto;

            //        return (<>
            //            <div key={item._id}>
            //                <img src={im}></img>
            //            </div></>)

            // })
        }
    </>);
}

export default SerchByCategoryChildFinish;




