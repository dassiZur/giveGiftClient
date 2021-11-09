import * as actionTypes from "../ActionTypes";
const initialState = {
    greetingCardArr: []
    //     selectedCourse: null
}
export const greetingCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GREETINGCARD_ADD:
            let arr = [...state.greetingCardArr, action.newGreetingCard]
            return {
                ...state,
                greetingCardArr: arr
            }
        case actionTypes.GREETINGCATRD_GET:
            console.log({...state, greetingCardArr: [...action.newGreetingCard] })
            return { ...state, greetingCardArr: [...action.newGreetingCard] };
    }
    return state;
}

