import SET_TAGS_ADD_MODE from "../actions/SET_TAGS_ADD_MODE";

function setTagsAddMode(value){
    return{
        type: SET_TAGS_ADD_MODE,
        value: value
    };
}

export default setTagsAddMode;