import SET_RESULT_ERROR from "../actions/SET_RESULT_ERROR";

function setResultError(value){
    return{
        type: SET_RESULT_ERROR,
        value: value
    };
}

export default setResultError;