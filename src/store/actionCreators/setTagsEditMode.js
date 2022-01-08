import SET_TAGS_EDIT_MODE from "../actions/SET_TAGS_EDIT_MODE";

function setTagsEditMode(value){
    return{
        type: SET_TAGS_EDIT_MODE,
        value: value
    };
}

export default setTagsEditMode;