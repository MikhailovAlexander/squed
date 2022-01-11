import initialState from "../initialState";
import SET_RESULT_ERROR from "../actions/SET_RESULT_ERROR";

function resultError(state = initialState.resultError, action){
    switch (action.type){
        case SET_RESULT_ERROR: return action.value;
        default: return state;
    }
}

export default resultError;