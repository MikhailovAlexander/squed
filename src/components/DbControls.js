import React from 'react';

class DbControls extends React.Component {
    changeDb = (event) => {
        this.props.setCurrentDb(String(event.target.value));
    }
    componentDidMount() {
        this.props.fetchDbList('./db_connect/db_list.json');
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