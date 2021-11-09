import * as actionTypes from "../ActionTypes";
const initialState = {
    giftArr: []
}
export const giftReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GIFT_GET:

            // console.log({ ...state, giftArr: [...action.newGift] })
            return { ...state, giftArr: [...action.newGift] };

        case actionTypes.GIFT_ADD:
            let arr = [...state.giftArr, action.newGift]
            return {
                ...state,
                giftArr: arr
            }
        case actionTypes.GIFT_DELETE:
            let arr1 = [...state.giftArr, action.deleteGift]
            return {
                ...state,
                giftArr: arr
            }
    }
    return state;
}
