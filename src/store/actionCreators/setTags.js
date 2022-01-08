import SET_TAGS from "../actions/SET_TAGS";

function setTags(newTags){
    return{
        type: SET_TAGS,
        tags: newTags
    };
}

export default setTags;