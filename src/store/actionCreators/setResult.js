import SET_RESULT from "../actions/SET_RESULT";

function setResult(result){
    return{
        type: SET_RESULT,
        result: result
    };
}

export default setResult;