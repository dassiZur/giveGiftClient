import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getGreetingCard } from "../../actions/greetingCard";
import { connect } from "react-redux";
import axios from "axios"
import { expressionStatement } from "@babel/types";
import "./greetingCardPhoto.scss";
const GreetingCardPhoto = (props) => {

    const [arr, setArr] = useState(null);
    //פונקציה שמביאה מהשרת את כל השמות של התמונות
    const GetAllGreetingCards=()=>{
        console.log("11111111111111111111111");
        axios.get("http://localhost:5000/greetingCards/"+props.idCategoryChild).then(succ=>setArr(succ.data));
        console.log(arr);

    }
    useEffect(() => { 
        GetAllGreetingCards();
    }, [])
    return (<>
    <Router>
        <div className="cards">
            {arr?arr.map((item) => {

                return (<div key={item._id}>
                    <nav className="nav-wrap">
                        <div className="nav-item">
                            
                            <Link to={{ pathname: `/greetingCardPhoto/${item._id} ` }}>{<img className="iii" src="item.path" ></img>} </Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route path={{ pathname: `/greetingCardPhoto/${item._id} ` }}>
                        </Route>
                    </Switch>
                </div>)
            }):null}
        </div>
    </Router>
    </>
    );
}

const myMapToProps = (state) => {
    return {  }
}
export default connect(myMapToProps, { getGreetingCard })(GreetingCardPhoto);
