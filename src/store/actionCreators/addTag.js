import ADD_TAG from "../actions/ADD_TAG";

function addTag(newTagKey){
    return{
        type: ADD_TAG,
        tagKey: newTagKey
    };
}

export default addTag;