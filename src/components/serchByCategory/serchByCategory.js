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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { getCategory } from "../../actions/category";
import BusinessOwner from "../businessOwner/businessOwner";
import { connect } from "react-redux";
import SerchByCategoryChild from "../serchByCategoryChild/serchByCategoryChild";
import PhotoSearch from "../search/photoSearch";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import Gallery from "../search/gallery";
import { Container, Navbar } from "react-bootstrap";

const SerchByCategory = (props) => {
  const [giftsArr, setGiftsArr] = useState([]);
  const getAllImag = () => {
    debugger;
    axios.get("http://localhost:5000/gifts").then((succ) => {
      // var arrImg = [];
      // succ.data.forEach(element => {
      //     let im = "http://localhost:5000/" + element.gifPhoto;
      //     arrImg.push({
      //         src: im,
      //          thumbnail: im,
      //         thumbnailWidth: 320,
      //         thumbnailHeight: 212,
      //         caption: element.nameGift
      //     })
      // });
      // setGiftsArr(arrImg);
      setGiftsArr(succ.data.filter((g) => g.status == "APPROVE"));
    });
  };

  useEffect(() => {
    props.getCategory();
    getAllImag();
  }, []);
  const { url, path } = useRouteMatch();
  var item1 = "";
  const func = (x) => {
    item1 = x;
  };
  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar1">
        <Container className="container">
          <Nav className="me-auto">
            {props.arr &&
              props.arr.map((item, index) => {
                return (
                  <div key={index}>
                    <Nav.Link
                      style={{ border: index == 0 && "none" }}
                      as={Link}
                      to={{
                        pathname: `/ChoseCategory/${item._id}`,
                        state: { name: item.nameCategory },
                      }}
                      // to={`/ChoseCategory/${item._id}`}
                      onClick={() => {
                        func(item);
                      }}
                    >
                      {item.nameCategory}

                      {/* <GreetingCard GtGreetingCardByCategoryId={item}></GreetingCard> */}
                    </Nav.Link>
                  </div>
                );
              })}
          </Nav>
        </Container>
      </Navbar>
      {/* <div>
        <div className="div-flex">
          {props.arr.map((item) => {
            return (
              <div key={item._id}>
                <Nav.Link
                  as={Link}
                  to={`/ChoseCategory/${item._id}`}
                  onClick={() => {
                    func(item);
                  }}
                >
                  {item.nameCategory}
                </Nav.Link>
              </div>
            );
          })}
        </div>

        <div>{console.log("item1._id " + item1._id)}</div>
      </div> */}
      {giftsArr && <Gallery giftsArr={giftsArr} />}
    </div>
  );
      }
const myMapToProps = (state) => {
  return { arr: state.categoryPart.categoryArr };
};
export default connect(myMapToProps, { getCategory })(SerchByCategory);










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
