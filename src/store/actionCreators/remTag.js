import REM_TAG from "../actions/REM_TAG";

function remTag(remTagKey){
    return{
        type: REM_TAG,
        tagKey: remTagKey
    };
}

export default remTag;