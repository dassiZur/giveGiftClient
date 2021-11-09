import * as actionTypes from "../ActionTypes";
import axios from "axios"

export const addCard = (greetingCard) => {
    return {
        type: actionTypes.GREETINGCARD_ADD,
        newGreetingCard: greetingCard
    }
}
export const postGreetingCard = (greetingCard) => {
    console.log("hhhhhhhhh")
    return (dispach) => {
        axios.post("http://localhost:5000/greetingCards", greetingCard).then(succ => {
            dispach(addCard(succ.data))
            alert("הכרטיס ברכה התווסף בהצלחה!!!")
        }).catch(err => { console.log("ההוספה לא הצליחה"); })
    }
}

export const getAllGreetingCard = (greetingCard) => {
    console.log("ww")

    return {
        type: actionTypes.GREETINGCATRD_GET,
        newGreetingCard: greetingCard
    }
}
export const getGreetingCard = () => {

    return async (dispatch) => {
        axios.get("http://localhost:5000/greetingCards")
            .then(succ => {
                dispatch(getAllGreetingCard(succ.data))
            }).catch(err => console.log("============this is mistake" + err.message))
    }
}
// export const getAllById = (greetingCard) => {
//     console.log("ww")

//     return {
//         type: actionTypes.GREETINGCATRD_GET,
//         newGreetingCard: greetingCard
//     }
// }
// export const getById = () => {

//     return async (dispatch) => {
//         axios.get("http://localhost:5000/greetingCards")
//             .then(succ => {
//                 dispatch(getAllById(succ.data))
//             }).catch(err => console.log("============this is mistake" + err.message))
//     }
// }

/////////////////////////////////////////////
// export const getAllCategoriesChild = (category) => {
//     return {
//         type: actionTypes.CATEGORIES_GET,
//         newCategory: category
//     }
// }
// export const getCategoriesChild = () => {
//     return (dispatch) => {
//         axios.getById("http://localhost:5000/categories")
//             .then(succ => {
//                 dispatch(getAllCategoriesChild(succ.data))
//             }).catch(err => console.log("============this is mistake" + err.message))
//     }
// }