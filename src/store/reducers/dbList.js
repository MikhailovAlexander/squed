import initialState from "../initialState";
import SET_DB_LIST from "../actions/SET_DB_LIST";

function dbList(state = initialState.dbList, action){
    switch (action.type){
        case SET_DB_LIST: return action.dbList;
        default: return state;
    }
}

export default dbList;