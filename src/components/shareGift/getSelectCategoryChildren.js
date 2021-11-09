import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getCategory } from "../../actions/category";
import { connect } from "react-redux";
import axios from "axios"
import './serchByCategoryChild.scss'
const SerchByCategoryChild = (props) => {
    const [arr, setArr] = useState(null);
    const GetAllCategoriesChild = (e) => {
            axios.get(`http://localhost:5000/categories/${e} `).then(succ => setArr(succ.data));

    }
    useEffect(() => {
        
        GetAllCategoriesChild( props.getSelectCategoryChildren());
    }, [])
    return (<>

        <Router>
            <div>
                {arr ? arr.map((item) => {
                    return (<div key={item._id}>
                            {item.nameCategory}
                    </div>)
                }) : null}
            </div>
        </Router>
    </>
    );
}

const myMapToProps = (state) => {
    return {}
}
export default connect(myMapToProps, { getCategory })(SerchByCategoryChild);
