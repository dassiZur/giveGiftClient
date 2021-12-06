// // import React, { useEffect, useState } from "react";
// // import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// // import { getCategory } from "../../actions/category";
// // import { connect } from "react-redux";
// // import axios from "axios"
// // import { expressionStatement } from "@babel/types";
// // import PhotoSearch from "../search/photoSearch";
// // const SerchByCategoryChild = (props) => {

// //     const [arr, setArr] = useState(null);
// //     //פונקציה שמביאה מהשרת את כל התתי קטגוריות
// //     const GetAllCategoriesChild = () => {
// //         axios.get("http://localhost:5000/categories/" + props.idCategoryChild).then(succ => {
// //             setArr(succ.data)
// //         }
// //         );
// //         console.log(arr)
// //         console.log("hhhhhhhhhhhhh")
// //     }
// //     useEffect(() => {
// //         //props.getCategory() 
// //         GetAllCategoriesChild();
// //     }, [])
// //     return (<><Router>
// //         <div>
// //             {arr ? arr.map((item) => {
// //                 return (<div key={item._id}>
// //                     <nav className="nav-wrap">
// //                         <div className="nav-item">
// //                             <Link to={{ pathname: `/serchByCategoryChild/${item._id}` }}>{item.nameCategory} </Link>
// //                         </div>
// //                     </nav>
// //                     <Switch>
// //                         <Route exact path={{ pathname: `/serchByCategoryChild/${item._id}` }}>
// //                             <PhotoSearch idCategory={item._id}/>
// //                         </Route>
// //                     </Switch>
// //                 </div>)
// //             }) : null}
// //         </div>
// //     </Router></>
// //     );
// // }

// // const myMapToProps = (state) => {
// //     return {}
// // }
// // export default connect(myMapToProps, { getCategory })(SerchByCategoryChild);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { getCategory } from "../../actions/category";
// import { connect } from "react-redux";
// import axios from "axios"
// import { expressionStatement } from "@babel/types";
// import './serchByCategoryChild.scss'
// const SerchByCategoryChild = (props) => {

//     const [arr, setArr] = useState(null);
//     //פונקציה שמביאה מהשרת את כל התתי קטגוריות
//     const GetAllCategoriesChild = () => {
//         axios.get("http://localhost:5000/categories/" + props.idCategoryChild).then(succ => setArr(succ.data));
//     }
//     useEffect(() => {
//         //props.getCategory() 
//         GetAllCategoriesChild();
//     }, [])
//     return (<><Router>
//         <div>
//             {arr ? arr.map((item) => {

//                 return (<div key={item._id}>

//                     <NavDropdown.Item href={`/serchByCategoryChild/${item._id} `}>
//                         {item.nameCategory}
//                     </NavDropdown.Item>

//                     <Switch>
//                         <Route path={{ pathname: `/serchByCategoryChild/${item._id} ` }}>  </Route>
//                     </Switch>
//                 </div>)
//             }) : null}
//         </div>
//     </Router></>
//     );
// }

// const myMapToProps = (state) => {
//     return {}
// }
// export default connect(myMapToProps, { getCategory })(SerchByCategoryChild);
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { getCategory } from "../../actions/category";
// import { connect } from "react-redux";
// import axios from "axios"
// import { expressionStatement } from "@babel/types";
// import PhotoSearch from "../search/photoSearch";
// const SerchByCategoryChild = (props) => {

//     const [arr, setArr] = useState(null);
//     //פונקציה שמביאה מהשרת את כל התתי קטגוריות
//     const GetAllCategoriesChild = () => {
//         axios.get("http://localhost:5000/categories/" + props.idCategoryChild).then(succ => {
//             setArr(succ.data)
//         }
//         );
//         console.log(arr)
//         console.log("hhhhhhhhhhhhh")
//     }
//     useEffect(() => {
//         //props.getCategory() 
//         GetAllCategoriesChild();
//     }, [])
//     return (<><Router>
//         <div>
//             {arr ? arr.map((item) => {
//                 return (<div key={item._id}>
//                     <nav className="nav-wrap">
//                         <div className="nav-item">
//                             <Link to={{ pathname: `/serchByCategoryChild/${item._id}` }}>{item.nameCategory} </Link>
//                         </div>
//                     </nav>
//                     <Switch>
//                         <Route exact path={{ pathname: `/serchByCategoryChild/${item._id}` }}>
//                             <PhotoSearch idCategory={item._id}/>
//                         </Route>
//                     </Switch>
//                 </div>)
//             }) : null}
//         </div>
//     </Router></>
//     );
// }

// const myMapToProps = (state) => {
//     return {}
// }
// export default connect(myMapToProps, { getCategory })(SerchByCategoryChild);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { getCategory } from "../../actions/category";
import { connect } from "react-redux";
import axios from "axios"
import { expressionStatement } from "@babel/types";
import './serchByCategoryChild.scss'
import Gallery from '../search/gallery';

const SerchByCategoryChild = (props) => {
    const { id } = useParams();
    const [arr, setArr] = useState(null);
    // //פונקציה שמביאה מהשרת את כל התתי קטגוריות
    const GetAllCategoriesChild = (idCategoryChild) => {

        if (idCategoryChild)
            axios.get(`http://localhost:5000/categories/${idCategoryChild} `).then(succ => setArr(succ.data));
        else
            axios.get(`http://localhost:5000/categories/${props.getSelectCategoryChildren} `).then(succ => setArr(succ.data));

    }
    const [giftsArr, setGiftsArr] = useState([]);
    const getAllImag = () => {
        debugger;
        axios.get(`http://localhost:5000/gifts/getByIdCategory/${id}`).then(succ => {
            var arrImg = [];
            debugger;
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
        }).catch(err => { debugger; console.log(err.response); });
    }
    useEffect(() => {
        //props.getCategory() 
        GetAllCategoriesChild(id); getAllImag()
    }, [])
    return (<div>

        <div>
            {console.log(arr)}
            {console.log("dddddddddddddddddddddddd")}


            {arr && arr.map((item) => {
                return (<div key={item._id}>

                    <NavDropdown.Item as={Link} to={`/ChoseCategoryFinish/${item._id} `}>
                        {item.nameCategory}
                    </NavDropdown.Item>

                    <Route path={{ pathname: `/ChoseCategoryFinish/${item._id} ` }}>  </Route>
                </div>)
            })}
        </div>
        {giftsArr ?
            <Gallery giftsArr={giftsArr} /> :
            <h2>לא קיימות מתנות בקטגוריה זו</h2>
        }
    </div>
    );
}

const myMapToProps = (state) => {
    return {}
}
export default connect(myMapToProps, { getCategory })(SerchByCategoryChild);




