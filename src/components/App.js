import React from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism.css';
import TagControlsRedux from "../containers/TagControlsRedux";
import Editor from "react-simple-code-editor";
import ResultRedux from "../containers/ResultRedux";

const version = "0.2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbList: ["SqlServer", "PostgreSql"],
      currentDb: undefined
    };
  }
  changeDb = (event) => {
    this.setState({currentDb: String(event.target.value)});
  }

  render() {
    return (
        <div id="app">
          <div id="header">
            <span>SQuEd - Special Query Editor</span><br/>
            <span className="descr">Онлайн-редактор для отладки SQL-запросов с динамической модификацией</span>
          </div>
          <div id="workspace">
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
                  value={this.props.queryModifier.modifyText(this.props.query, this.props.tags)}
                  disabled={true}
                  highlight={code => highlight(code, languages.sql)}
              />
            </div>
            <div id="controls">
              <div id="db_list_area" className="controls_block">
                <label>Выбор базы данных</label>
                <select id="db_list" onChange={this.changeDb}>
                  {this.state.dbList.map(db => (
                      <option key={db}>{db}</option>
                  ))}
                </select>
                <button id="check_btn">Выполнить запрос</button>
              </div>
              <TagControlsRedux
                  handlers = {this.tagHandlers}
                  className="controls_block"/>
            </div>
          </div>
          <ResultRedux/>
          <div id="footer">
            <div className="footer_info">
              <div className="copyright">©AlexanderMikhaylov 2021</div>
              <div className="descr">This is a team students project</div>
            </div>
            <div className="version">{"version " + version}</div>
          </div>
        </div>
    )
  }
}

export default App;
