import initialState from "../initialState";
import SET_TEMP_TAG_KEY from "../actions/SET_TEMP_TAG_KEY";

function tempTagKey(state = initialState.tempTagKey, action){
    switch (action.type){
        case SET_TEMP_TAG_KEY: return action.value;
        default: return state;
    }
}

export default tempTagKey;