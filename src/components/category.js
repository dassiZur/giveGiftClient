//import CakeCard from "./cakeCard";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getCategory } from "../actions/category";

const Category = (props) => {
    useEffect(() => { props.getCategory()},[]);
    return (
    <><div>
         <select class="form-select" multiple aria-label="multiple select example">
        {props.arr.map((item, index) => {
            return ( <option key={index} value={index}>{item.nameCategory}</option>)
        }
        
        )
        }
        </select>
    </div></>);
}
const formatData = (data) =>{
   let formatData = [];
     for (let index = 0; index < data.length; index++) {
         const elem = data[index];
            formatData[index]={ 
                key: elem._id,
                text:elem.nameCategory,
                value: elem._id
            }
     }
    return formatData;
}
const mapStateToProps = (state) => {
    return {
        
        arr: state.categoryPart.categoryArr
    }
}
export default connect(mapStateToProps, { getCategory })(Category); 
