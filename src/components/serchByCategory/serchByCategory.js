// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { getCategory } from "../../actions/category";
// import BusinessOwner from "../businessOwner/businessOwner";
// import { connect } from "react-redux";
// import SerchByCategoryChild from '../serchByCategoryChild/serchByCategoryChild';
// import PhotoSearch from "../search/photoSearch";

// const SerchByCategory = (props) => {
//     useEffect(() => { props.getCategory() }, [])
//     console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk")

//     return (<><Router>
//         <div>
//             {props.arr.map((item) => {
//                 return (<div key={item._id}>

//                     <nav className="nav-wrap">
//                         <div className="nav-item">
//                             <Link to={`/SerchByCategory/${item._id}`}>{item.nameCategory} </Link>
//                         </div>
//                     </nav>
//                     <Switch>
//                         <Route exact path={`/SerchByCategory/${item._id}`}>
//                             <SerchByCategoryChild idCategoryChild={item._id} />
//                             <PhotoSearch idCategory={item._id} />
//                         </Route>
//                     </Switch>
//                 </div>)

//             })}
//         </div>
//     </Router></>
//     );
// }

// const myMapToProps = (state) => {
//     return { arr: state.categoryPart.categoryArr }
// }
// export default connect(myMapToProps, { getCategory })(SerchByCategory);



import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { getCategory } from "../../actions/category";
import BusinessOwner from "../businessOwner/businessOwner";
import { connect } from "react-redux";
import SerchByCategoryChild from '../serchByCategoryChild/serchByCategoryChild';
import PhotoSearch from "../search/photoSearch";
import Nav from 'react-bootstrap/Nav';
import axios from "axios"
import Gallery from 'react-grid-gallery';

const SerchByCategory = (props) => {
    const [giftsArr, setGiftsArr] = useState([]);
    const getAllImag = () => {
        axios.get("http://localhost:5000/gifts"). then(succ => {                    
            var arrImg = [];
            succ.data.forEach(element => {
                let im = "http://localhost:5000/" + element.gifPhoto;
                arrImg.push({
                    src: im,
                     thumbnail: im,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                    caption: element.nameGift
                })
            });
            setGiftsArr(arrImg);
        });
    }

    useEffect(() => { props.getCategory(); getAllImag() }, [])
    const { url, path } = useRouteMatch();
    var item1 = "";
    const func = (x) => {
        item1 = x;
    }
    return (<div>
        <Router>
            <div>
                {props.arr.map((item) => {

                    return (<div key={item._id}>

                        <Nav.Link
                            href={`/ChoseCategory/${item._id}`} onClick={() => {
                                func(item);
                            }}  >
                            {item.nameCategory}
                        </Nav.Link >

                    </div>)
                })}

            </div>

        </Router>
        <div>{console.log("item1._id " + item1._id)}</div>
        {/* <SerchByCategoryChild idCategoryChild={item1._id}></SerchByCategoryChild> */}
        {giftsArr &&

            <Gallery images={giftsArr} showLightboxThumbnails={true} />
        }
    </div>
    );
    // return (<><Router>
    //     <div>
    //         {props.arr.map((item) => {
    //             console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk")
    //             console.log(item.parentCategories)
    //             return (<div key={item._id}>

    //                 <nav className="nav-wrap">
    //                     <div className="nav-item">
    //                         <Link to={`/SerchByCategory/${item._id}`}>{item.nameCategory} </Link>
    //                     </div>
    //                 </nav>
    //                 <Switch>
    //                     <Route exact path={`/SerchByCategory/${item._id}`}>
    //                         <SerchByCategoryChild idCategoryChild={item._id} />
    //                         <PhotoSearch idCategory={item._id} />
    //                     </Route>
    //                 </Switch>
    //             </div>)

    //         })}
    //     </div>
    // </Router></>
    // );
}

const myMapToProps = (state) => {
    return { arr: state.categoryPart.categoryArr }
}
export default connect(myMapToProps, { getCategory })(SerchByCategory);











// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { getCategory } from "../../actions/category";
// import BusinessOwner from "../businessOwner/businessOwner";
// import { connect } from "react-redux";

// const SerchByCategory = (props) => {

//     useEffect(() => { props.getCategory() }, [])
//     var x = undefined
//     return (<><Router>
//         <div>
//             {/* {x = undefined} */}
//             {props.arr.map((item) => {
//                 console.log(item);

//                 if (item.parentCategories[0].nameCategory != x)
//                     if (x == undefined) {
//                         x = item.parentCategories[0].nameCategory;
//                         console.log(x);
//                     }
//                 if (x == item.parentCategories[0].nameCategory) {
//                     return (<div key={item._id}>
//                         <nav className="nav-wrap">
//                             <div className="nav-item">
//                                 <Link to={{ pathname: `/SerchByCategory/${item._id} ` }}>{item.parentCategories[0].nameCategory} </Link>
//                             </div>
//                         </nav>
//                         <Switch>
//                             <Route path={{ pathname: `/SerchByCategory/${item._id} ` }}>
//                             </Route>

//                         </Switch>

//                     </div>)
//                 }
//                 var x = item.parentCategories[0].nameCategory
//             })}
//         </div>
//     </Router></>
//     );
// }

// const myMapToProps = (state) => {
//     return { arr: state.categoryPart.categoryArr }
// }
// export default connect(myMapToProps, { getCategory })(SerchByCategory);
