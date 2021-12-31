import React from 'react';
import TagControls from './components/TagControls';
import Result from './components/Result';
import QueryModifier from './QueryModifier';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-sql';
import './App.css';
import 'prismjs/themes/prism.css';

const queryModifier = new QueryModifier();
const version = "0.2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: queryModifier.querySample,
      tags: queryModifier.tagsSample,
      result:{
        label: "Результат выполнения запроса",
        header: [],
        values: []
      },
      dbList: ["SqlServer", "PostgreSql"],
      currentDb: undefined
    };
  }
  changeDb = (event) => {
    this.setState({currentDb: String(event.target.value)});
  }

  tagHandlers = {
    checkTagKey: queryModifier.checkTagKey,
    updateTag: (updatedTag) => {
      const newTags = this.state.tags.map(tag => {
            if (tag.key === updatedTag.key) return updatedTag;
            return tag;
          }
      )
      this.setState({tags: newTags});
    },
    updateTagKey: (updatedTagKey, currentTagKey) => {
      const newTags = this.state.tags.map(tag => {
            if (tag.key === currentTagKey) return {
              key: updatedTagKey, value: tag.value, set_mode: tag.set_mode, set_value: tag.set_value};
            return tag;
          }
      )
      this.setState({tags: newTags});
    },
    addTag: (newTagKey) => {
      const newTags = this.state.tags.concat(
          {key: newTagKey, value: false, set_mode: false, set_value: undefined});
      this.setState({tags: newTags});
    },
    remTag: (remTagKey) => {
      const newTags = this.state.tags.filter(tag => tag.key !== remTagKey);
      this.setState({tags: newTags});
    },
    clearTags: () => {
      const newTags = [];
      this.setState({tags: newTags});
    },
    searchTags: () => {
      const newTags = queryModifier.searchTags(this.state.query);
      this.setState({tags: newTags});
    },
    analyseTags: () => {
      const label = "Анализ тегов в исходном запросе";
      const header = ["Имя","Количество подстановок","в т.ч. строк","Количество добавлений","в т.ч. строк",
        "Количество удалений","в т.ч. строк"];
      const values = queryModifier.analyseTags(this.state.query);
      this.setState({result: {label: label, header: header, values: values}});
    }
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
                  value={this.state.query}
                  onValueChange={code => this.setState({query: code})}
                  highlight={code => highlight(code, languages.sql)}
              />
            </div>
            <div id="trg_query_panel" className="edit_panel">
              <label>Модифицированный запрос:</label>
              <Editor
                  className="query"
                  value={queryModifier.modifyText(this.state.query, this.state.tags)}
                  disabled={true}
                  highlight={code => highlight(code, languages.sql)}
              />
            </div>
            <div id="controls">
              <div id="db_list_area" className="controls_block">
                <label>Выбор базы данных</label>
                <select id="db_list" onChange={this.changeDb}>
                  {this.state.dbList.map(db => (
                      <option>{db}</option>
                  ))}
                </select>
                <button id="check_btn">Выполнить запрос</button>
              </div>
              <TagControls
                  tags={this.state.tags} handlers = {this.tagHandlers}
                  className="controls_block"/>
            </div>
          </div>
          <Result result = {this.state.result}/>
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
