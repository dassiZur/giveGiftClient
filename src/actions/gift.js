import * as actionTypes from "../ActionTypes";
import axios from "axios"

export const getAllGift = (gift) => {
    return {
        type: actionTypes.GIFT_GET,
        newGift: gift
    }
}
export const getGift = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/gifts",)
            .then(succ => {
                dispatch(getAllGift(succ.data))
            }).catch(err => console.log("============this is mistake" + err.message))
    }
}

export const postAllGift = (gift) => {
    return {
        type: actionTypes.GIFT_ADD,
        newGift: gift
    }
}
export const postGift = (gift) => {
    return (dispach) => {
        axios.post("http://localhost:5000/gifts", gift).then(succ => {
            dispach(postAllGift(succ.data))
            alert("מתנה התווסה בהצלחה!!!")
        }).catch(err => { console.log("ההוספה לא הצליחה"); })
    }
}
export const deleteAllGift = (gift) => {
    return {
        type: actionTypes.GIFT_DELETE,
        deleteGift: gift
    }
}
export const deleteGift = (gift) => {
    return (dispach) => {
        axios.delete("http://localhost:5000/gifts/"+gift).then(succ => {
            dispach(deleteAllGift(succ.data))
            alert("מתנה התווסה בהצלחה!!!")
        }).catch(err => { console.log("המחיקה לא הצליחה"); })
    }
}