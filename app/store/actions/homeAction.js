import {
    ON_CHANGE_TAB,
} from "./actionTypes";

//picker action
export const onChangeTab = (activeTab) => {
    return async (dispatch, getState) => {
        const ActiveTab = getState().HomeState.ActiveTab;
        if (ActiveTab !== activeTab) {
            dispatch({ type: ON_CHANGE_TAB, payload: activeTab });
        } else {
            //do nothing
        }
    }
};

