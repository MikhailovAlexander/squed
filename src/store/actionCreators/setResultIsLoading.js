import SET_RESULT_IS_LOADING from "../actions/SET_RESULT_IS_LOADING";

function setResultIsLoading(value){
    return{
        type: SET_RESULT_IS_LOADING,
        value: value
    };
}

export default setResultIsLoading;