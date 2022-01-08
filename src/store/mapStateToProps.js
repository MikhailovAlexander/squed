function mapStateToProps(component) {
    switch (component) {
        case "App": {
            return function (state) {
                return {
                    queryModifier: state.queryModifier,
                    tags: state.tags,
                    query: state.query
                };
            }
        }
        case "Editor": {
            return function (state) {
                return {
                    queryModifier: state.queryModifier,
                    tags: state.tags,
                    query: state.query
                };
            }
        }
        case "TagControls": {
            return function (state) {
                return {
                    queryModifier: state.queryModifier,
                    tags: state.tags,
                    query: state.query
                };
            }
        }
        default: return undefined;
    }
}

export default mapStateToProps;