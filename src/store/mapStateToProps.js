function mapStateToProps(component) {
    switch (component) {
        case "Editors": {
            return function (state) {
                return {
                    query: state.query,
                    modifiedQuery: state.queryModifier.modifyText(state.query, state.tags)
                };
            }
        }
        case "DbControls": {
            return function (state) {
                return {
                    modifiedQuery: state.queryModifier.modifyText(state.query, state.tags),
                    resultIsLoading: state.resultIsLoading,
                    resultHasError: state.resultHasError,
                    dbList: state.dbList,
                    currentDb: state.currentDb
                };
            }
        }
        case "TagControls": {
            return function (state) {
                return {
                    queryModifier: state.queryModifier,
                    tags: state.tags,
                    currentTag: state.currentTag,
                    tagsEditMode: state.tagsEditMode,
                    tagsAddMode: state.tagsAddMode,
                    tempTagKey: state.tempTagKey,
                    query: state.query
                };
            }
        }
        case "Tag": {
            return function (state) {
                return {
                    tags: state.tags,
                    currentTag: state.currentTag,
                    tagsEditMode: state.tagsEditMode,
                    tagsAddMode: state.tagsAddMode,
                };
            }
        }
        case "Result": {
            return function (state) {
                return {
                    result: state.result,
                    resultHasError: state.resultHasError,
                    resultError: state.resultError
                };
            }
        }
        default: return undefined;
    }
}

export default mapStateToProps;