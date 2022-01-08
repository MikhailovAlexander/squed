import initialState from "../initialState";
import SET_CURRENT_TAG from "../actions/SET_CURRENT_TAG";

function currentTag(state = initialState.currentTag, action){
    switch (action.type){
        case SET_CURRENT_TAG: return action.tagKey;
        default: return state;
    }
}

export default currentTag;