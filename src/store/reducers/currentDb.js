import initialState from "../initialState";
import SET_CURRENT_DB from "../actions/SET_CURRENT_DB";

function currentDb(state = initialState.currentDb, action){
    switch (action.type){
        case SET_CURRENT_DB: return action.db;
        default: return state;
    }
}

export default currentDb;