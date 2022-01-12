import React from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism.css';
import Editor from "react-simple-code-editor";

class Editors extends React.Component {
    render() {
        return (
            <div className="editors">
                <div id="src_query_panel" className="edit_panel">
                    <label>Исходный запрос:</label>
                    <Editor
                        className="query"
                        value={this.props.query}
                        onValueChange={code => this.props.setQuery(code)}
                        highlight={code => highlight(code, languages.sql)}
                    />
                </div>
                <div id="trg_query_panel" className="edit_panel">
                    <label>Модифицированный запрос:</label>
                    <Editor
                        className="query"
                        value={this.props.modifiedQuery}
                        disabled={true}
                        highlight={code => highlight(code, languages.sql)}
                    />
                </div>
            </div>
        );
    }
}

export default Editors;