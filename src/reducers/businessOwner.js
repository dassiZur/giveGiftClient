import * as actionTypes from "../ActionTypes";
const initialState = {
    businessOwnerArr: []
    //     selectedCourse: null
}
export const businessOwnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BUSINESSOWNER_UPDATE:
            let arr1 = [...state.businessOwnerArr, action.newBusinessOwner]
            return {
                ...state,
                businessOwnerArr: arr1
            }
        case actionTypes.BUSINESSOWNER_ADD:
            let arr = [...state.businessOwnerArr, action.newBusinessOwner]
            return {
                ...state,
                businessOwnerArr: arr
            }
        case actionTypes.BUSINESSOWNER_GET:
            console.log({ ...state, businessOwnerArr: [...action.newBusinessOwner] })
            return { ...state, businessOwnerArr: [...action.newBusinessOwner] };
    }
    return state;

}

