import React from 'react';
import TagControlsRedux from "../containers/TagControlsRedux";
import ResultRedux from "../containers/ResultRedux";
import EditorsRedux from "../containers/EditorsRedux";
import DbControlsRedux from "../containers/DbControlsRedux";

const version = "0.21";

class App extends React.Component {
  render() {
    return (
        <div id="app">
          <div id="header">
            <span>SQuEd - Special Query Editor</span><br/>
            <span className="descr">Онлайн-редактор для отладки SQL-запросов с динамической модификацией</span>
          </div>
          <div id="workspace">
            <EditorsRedux/>
            <div id="controls">
              <DbControlsRedux/>
              <TagControlsRedux className="controls_block"/>
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
