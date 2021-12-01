import * as actionTypes from "../ActionTypes";
import axios from "axios"

export const addBusinessOwner = (businessOwner) => {
    return {
        type: actionTypes.BUSINESSOWNER_ADD,
        newBusinessOwner: businessOwner
    }
}

export const updBusinessOwner = (businessOwner) => {
    return {
        type: actionTypes.BUSINESSOWNER_UPDATE,
        newBusinessOwner: businessOwner
    }
}
export const postBusinessOwner = (businessOwner) => {
    return (dispach) => {
        axios.post("http://localhost:5000/businessOwners", businessOwner).then(succ => {
            localStorage.setItem("newBuss",JSON.stringify(succ.data));
            dispach(addBusinessOwner(succ.data))
            // alert("בעל העסק התווסף בהצלחה!!!")
        }).catch(err => { console.log("ההוספה לא הצליחה"); })
    }
}

export const updateBusinessOwner = (businessOwner) => {
    return (dispach) => {
        axios.put("http://localhost:5000/businessOwners", businessOwner).then(succ => {
            localStorage.setItem("newBuss",JSON.stringify(succ.data));
            dispach(updBusinessOwner(succ.data))
            // alert("בעל העסק עודכן בהצלחה!!!")
        }).catch(err => { console.log("העדכון לא הצליח"); })
    }
}

export const getAllBusinessOwner = (businessOwner) => {
    console.log("ww")

    return {
        type: actionTypes.BUSINESSOWNER_GET,
        newBusinessOwner: businessOwner
    }
}
export const getBusinessOwner = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/businessOwners")
            .then(succ => {
                dispatch(getAllBusinessOwner(succ.data))
            }).catch(err => console.log("============this is mistake" + err.message))
    }
}