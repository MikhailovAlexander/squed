import React from 'react';

class Result extends React.Component {
    render() {
        return (
            <div className="result">
                <label>{this.props.result.label}</label>
                <table className="result_tb">
                    <thead className="result_tb">
                    <tr className="result_tb">
                        {this.props.result.header.map(str => (<th className="result_tb">{str}</th>))}
                    </tr>
                    </thead>
                    <tbody className="result_tb">
                    {this.props.result.values.map(row => (
                        <tr className="result_tb">
                            {row.map(str => (<td className="result_tb">{str}</td>))}
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Result;