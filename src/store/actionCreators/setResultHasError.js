import SET_RESULT_HAS_ERROR from "../actions/SET_RESULT_HAS_ERROR";

function setResultHasError(value){
    return{
        type: SET_RESULT_HAS_ERROR,
        value: value
    };
}

export default setResultHasError;