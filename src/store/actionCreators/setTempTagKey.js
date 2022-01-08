import SET_TEMP_TAG_KEY from "../actions/SET_TEMP_TAG_KEY";

function setTempTagKey(value){
    return{
        type: SET_TEMP_TAG_KEY,
        value: value
    };
}

export default setTempTagKey;