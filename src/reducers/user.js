import * as actionTypes from "../ActionTypes";
const initialState = {
    userArr: []
    //     selectedCourse: null
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_ADD:
            let arr = [...state.userArr, action.newUser]
            return {
                ...state,
                userArr:arr
            }        
    }
    return state;
}

