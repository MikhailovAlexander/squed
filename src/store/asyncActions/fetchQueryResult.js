import setResultIsLoading from "../actionCreators/setResultIsLoading";
import setResultHasError from "../actionCreators/setResultHasError";
import setResultError from "../actionCreators/setResultError";
import setResult from "../actionCreators/setResult";

const label = "Результат выполнения запроса";

function fetchQueryResult(url, dbName, query){
    return (dispatch) => {
        dispatch(setResultIsLoading(true));
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({"dbName": dbName, "query": query})
        })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setResultHasError(Boolean(data["hasErrors"])));
                dispatch(setResultError(data["errorMessage"]));
                dispatch(setResult({label: label, header: data["header"], values: data["values"]}));
                dispatch(setResultIsLoading(false));
            })
            .catch((error) => {
                dispatch(setResultHasError(true));
                dispatch(setResultError(error));
                dispatch(setResult({label: label, header: [], values: []}));
                dispatch(setResultIsLoading(false));
            });
    };
}

export default fetchQueryResult;