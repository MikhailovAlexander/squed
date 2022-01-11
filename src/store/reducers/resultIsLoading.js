import initialState from "../initialState";
import SET_RESULT_IS_LOADING from "../actions/SET_RESULT_IS_LOADING";

function resultIsLoading(state = initialState.resultIsLoading, action){
    switch (action.type){
        case SET_RESULT_IS_LOADING: return action.value;
        default: return state;
    }
}

export default resultIsLoading;