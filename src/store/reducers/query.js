import initialState from "../initialState";
import SET_QUERY from "../actions/SET_QUERY";

function query(state = initialState.query, action){
    switch (action.type){
        case SET_QUERY: return action.query;
        default: return state;
    }
}

export default query;