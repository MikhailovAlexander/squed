import initialState from "../initialState";
import SET_TAGS_EDIT_MODE from "../actions/SET_TAGS_EDIT_MODE";

function tagsEditMode(state = initialState.tagsEditMode, action){
    switch (action.type){
        case SET_TAGS_EDIT_MODE: return action.value;
        default: return state;
    }
}

export default tagsEditMode;