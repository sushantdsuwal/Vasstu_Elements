import { ON_CHANGE_TAB } from "../actions/actionTypes";


const initialState = {
    ActiveTab: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_TAB:
            return {
                ...state,
                ActiveTab: action.payload
            };
        default: {
            return state;
        };
    }
};


