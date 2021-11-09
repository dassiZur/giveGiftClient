import * as actionTypes from "../ActionTypes";
import axios from "axios"

export const addUser = (user) => {
    return {
        type: actionTypes.USER_ADD,
        newUser: user
    }
}
export const postUser = (user) => {
    return (dispach) => {
        axios.post("http://localhost:5000/users", user).then(succ => {
        
            dispach(addUser(succ.data))
            alert("משתמש חדש התווסף בהצלחה!!!")
        }).catch(err => { console.log(err.message); })
    }
}
export const postUser1 = (user) => {
    return {
        type: actionTypes.USER_ADD,
        newUser: user
    }
}
export const postAllUser = (user) => {
    console.log("hhhhhhhhh")
    return (dispach) => {
        axios.post("http://localhost:5000/users/entry", user).then(succ => {
            dispach(postUser1(succ.data))
            alert("קטגוריה התווספה בהצלחה!!!")
        }).catch(err => { console.log("ההוספה לא הצליחה"); })
    }
}