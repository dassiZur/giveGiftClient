import * as actionTypes from "../ActionTypes";
const initialState = {
    categoryArr: [],
    categoryArrChil: []
    //     selectedCourse: null
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATEGORY_ADD:
            let arr = [...state.categoryArr, action.newCategory]
            return {
                ...state,
                categoryArr: arr
            }
        case actionTypes.CATEGORY_GET:
            console.log({ ...state, categoryArr: [...action.newCategory] })
            return { ...state, categoryArr: [...action.newCategory] };

        case actionTypes.CATEGORIES_GET:
            console.log({ ...state, categoryArr: [...action.newCategory] })
            return { ...state, categoryArr: [...action.newCategory] };
    }
    return state;
}

