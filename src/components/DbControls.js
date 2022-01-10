import React from 'react';

const dbListURL = './db_connect/getDbList.php';
class DbControls extends React.Component {
    changeDb = (event) => {
        this.props.setCurrentDb(String(event.target.value));
    }
    componentDidMount() {
        this.props.fetchDbList(dbListURL);
    }
    render() {
        return (
            <div id="db_list_area" className="controls_block">
                <label>Выбор базы данных</label>
                <select id="db_list" onChange={this.changeDb}>
                    {this.props.dbList.map(db => (
                        <option key={db}>{db}</option>
                    ))}
                </select>
                <button id="check_btn">Выполнить запрос</button>
            </div>
        );
    }
}

export default DbControls;