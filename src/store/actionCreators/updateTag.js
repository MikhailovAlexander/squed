import UPDATE_TAG from "../actions/UPDATE_TAG";

function updateTag(newTag){
    return{
        type: UPDATE_TAG,
        tag: newTag
    };
}

export default updateTag;