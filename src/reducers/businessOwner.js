import * as actionTypes from "../ActionTypes";
const initialState = {
    businessOwnerArr: []
    //     selectedCourse: null
}
export const businessOwnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BUSINESSOWNER_ADD:
            debugger
            let arr = [...state.businessOwnerArr, action.newBusinessOwner]
            return {
                ...state,
                businessOwnerArr: arr
            }
        case actionTypes.BUSINESSOWNER_UPDATE:
            let usersw = state.businessOwnerArr.map(u => { debugger; return u._id !== action.newBusinessOwner._id ? u : action.newBusinessOwner });
            debugger
            let arr1 = [...state.businessOwnerArr, action.newBusinessOwner]
            return {
                ...state,
                businessOwnerArr: usersw
            }
        case actionTypes.BUSINESSOWNER_GET:
            console.log({ ...state, businessOwnerArr: [...action.newBusinessOwner] })
            return { ...state, businessOwnerArr: [...action.newBusinessOwner] };
    }
    return state;

}

