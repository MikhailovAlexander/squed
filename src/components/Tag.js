import React from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

class Tag extends React.Component {
    changeTagValue = (event) => {
        const updatedTag =  {
            key: this.props.tag.key,
            value: event.target.checked,
            set_mode: this.props.tag.set_mode,
            set_value: this.props.tag.set_value};
        this.props.handlers.updateTagHandler(updatedTag);
    }
    changeTagSetMode = (event) => {
        const updatedTag =  {
            key: this.props.tag.key,
            value: this.props.tag.value,
            set_mode: event.target.checked,
            set_value: this.props.tag.set_value};
        this.props.handlers.updateTagHandler(updatedTag);
    }
    changeTagSetValue = (event) => {
        const updatedTag =  {
            key: this.props.tag.key,
            value: this.props.tag.value,
            set_mode: this.props.tag.set_mode,
            set_value: event.target.value};
        this.props.handlers.updateTagHandler(updatedTag);
    }
    tagClick = () => {
        if (this.props.isCurrent) return;
        this.props.handlers.clickTagHandler(this.props.tag.key);
    }
    render() {
        return (
            <tr className={"Tag" + (this.props.isCurrent ? " currentTag" : "")}
                 onClick={this.tagClick}>
                <td><input id={this.props.tag.key} className="tag_item" type="checkbox" checked={this.props.tag.value}
                       onChange={this.changeTagValue}/></td>
                <td><label className="tag_item">{this.props.tag.key}</label></td>
                <td><Toggle
                    id={this.props.tag.key + "_set_mode"} className="tag_item"
                    checked={this.props.tag.set_mode}
                    aria-label='No label tag'
                    onChange={this.changeTagSetMode} /></td>
                <td><input
                    id={this.props.tag.key + "_set_value"}
                    type="text"
                    disabled={!this.props.tag.set_mode}
                    onChange={this.changeTagSetValue}
                    value={this.props.tag.set_value}
                /></td>
            </tr>
        );
    }
}

export default Tag;