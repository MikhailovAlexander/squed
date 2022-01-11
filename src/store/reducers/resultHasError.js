import initialState from "../initialState";
import SET_RESULT_HAS_ERROR from "../actions/SET_RESULT_HAS_ERROR";

function resultHasError(state = initialState.resultHasError, action){
    switch (action.type){
        case SET_RESULT_HAS_ERROR: return action.value;
        default: return state;
    }
}

export default resultHasError;