import initialState from "../initialState";
import SET_RESULT from "../actions/SET_RESULT";


function result(state = initialState.result, action){
    switch (action.type){
        case SET_RESULT: return action.result;
        default: return state;
    }
}

export default result;