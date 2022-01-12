import setDbList from "../actionCreators/setDbList";
import setCurrentDb from "../actionCreators/setCurrentDb";

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
            .then((dbList) => {
                dispatch(setDbList(dbList));
                if (dbList.length > 0) dispatch(setCurrentDb(dbList[0]));
            })
    };
}

export default fetchDbList;