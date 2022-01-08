import initialState from "../initialState";
import SET_TAGS_ADD_MODE from "../actions/SET_TAGS_ADD_MODE";

function tagsAddMode(state = initialState.tagsAddMode, action){
    switch (action.type){
        case SET_TAGS_ADD_MODE: return action.value;
        default: return state;
    }
}

export default tagsAddMode;