import ADD_TAG from "../actions/ADD_TAG";
import REM_TAG from "../actions/REM_TAG";
import SET_TAGS from "../actions/SET_TAGS";
import UPDATE_TAG from "../actions/UPDATE_TAG";
import UPDATE_TAG_KEY from "../actions/UPDATE_TAG_KEY";
import initialState from "../initialState";

function tags(state = initialState.tags, action){
    switch (action.type){
        case ADD_TAG: {
            const newTags = state.concat(
                {key: action.tagKey, value: false, set_mode: false, set_value: undefined});
            return newTags;
        };
        case REM_TAG:{
            const newTags = state.filter(tag => tag.key !== action.tagKey);
            return newTags;
        };
        case SET_TAGS: return action.tags;
        case UPDATE_TAG:{
            const newTags = state.map(tag => {
                if (tag.key === action.tag.key) return action.tag;
                return tag;
            });
            return newTags;
        };
        case UPDATE_TAG_KEY:{
            const newTags = state.map(tag => {
                    if (tag.key === action.tagKey) return {
                        key: action.newTagKey, value: tag.value, set_mode: tag.set_mode, set_value: tag.set_value};
                    return tag;
                });
            return newTags;
        };
        default: return state;
    }
}

export default tags;