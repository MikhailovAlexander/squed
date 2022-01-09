import setDbList from "../actionCreators/setDbList";

function fetchDbList(url){
    return (dispatch) => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    return [];
                }
                return response;
            })
            .then((response) => response.json())
            .then((dbList) => dispatch(setDbList(dbList)))
    };
}

export default fetchDbList;