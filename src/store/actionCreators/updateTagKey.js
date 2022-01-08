import UPDATE_TAG_KEY from "../actions/UPDATE_TAG_KEY";

function updateTagKey(updatedTagKey, currentTagKey){
    return{
        type: UPDATE_TAG_KEY,
        tagKey: currentTagKey,
        newTagKey: updatedTagKey
    };
}

export default updateTagKey;