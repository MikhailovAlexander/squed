import React from 'react';

class Result extends React.Component {
    render() {
        return (
            <div className="result">
                <label>{this.props.result.label}</label>
                <div hidden={!this.props.resultHasError}>
                    <div className="result_error">Запрос завершен с ошибкой:</div>
                    <div className="result_error">{this.props.resultError}</div>
                </div>
                <table className="result_tb">
                    <thead className="result_tb">
                    <tr className="result_tb">
                        {this.props.result.header.map((str, index) => (
                            <th key={index} className="result_tb">{str}</th>)
                        )}
                    </tr>
                    </thead>
                    <tbody className="result_tb">
                    {this.props.result.values.map((row, row_index) => (
                        <tr className="result_tb" key={row_index}>
                            {row.map((str, str_index) => (
                                <td className="result_tb" key={str_index}>{str}</td>))}
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Result;