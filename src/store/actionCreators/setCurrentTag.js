import SET_CURRENT_TAG from "../actions/SET_CURRENT_TAG";

function setCurrentTag(tagKey){
    return{
        type: SET_CURRENT_TAG,
        tagKey: tagKey
    };
}

export default setCurrentTag;