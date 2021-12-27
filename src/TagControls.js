import React from 'react';
import Tag from "./Tag";

class TagControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTag: undefined,
            tempValue: undefined,
            addMode: false,
            editMode:false
        };
        this.handlers = this.props.handlers;
        this.addPlaceholder = "Введите имя нового тега";
        this.msgErrorDuplicateTagName = "Тег с введенным именем уже существует";
        this.msgErrorEmptyCurrentTag = "Не выбран ни один тег из списка";
        this.msgErrorCheckTagKey = "Имя тега не соответствует требованиям:\n" +
            "допустимы цифры, латинские буквы, символ подчеркивания\n" +
            "недопустимо вхождение строк '_add','_rem','_set'";
        this.msgConfirmDeleteTag = "Выбранный тег будет удален. Продолжить?";
        this.msgConfirmClearTags = "Все теги будут удалены. Продолжить?";
        this.msgConfirmSearchTags = "При поиске тегов в запросе все текущие теги будут удалены. Продолжить?";
    }

    isTagsContains = (newTagName) => {
        return this.props.tags.reduce((curVal, tag) => curVal || (tag.key === newTagName), false);
    }
    clickTag = (key) => {
        if(this.state.editMode) return;
        this.setState({currentTag: key});
    }
    addButtonClick = () => {
        this.setState({addMode: true});
    }
    remButtonClick = () => {
        if(this.state.currentTag === undefined){
            alert(this.msgErrorEmptyCurrentTag);
            return;
        }
        if(window.confirm(this.msgConfirmDeleteTag)) this.handlers.remTag(this.state.currentTag);
        this.setState({currentTag: undefined});
    }
    editButtonClick = () => {
        if(this.state.currentTag === undefined){
            alert(this.msgErrorEmptyCurrentTag);
            return;
        }
        this.setState({editMode: true, tempValue: this.state.currentTag});
    }
    clearButtonClick = () => {
        if(window.confirm(this.msgConfirmClearTags)) this.handlers.clearTags();
        this.setState({currentTag: undefined, tempValue: undefined});
    }
    searchButtonClick = () => {
        if(window.confirm(this.msgConfirmSearchTags)) this.handlers.searchTags();
    }
    saveButtonClick = () => {
        let newTagKey = this.state.tempValue;
        if(this.isTagsContains(newTagKey)){
            alert(this.msgErrorDuplicateTagName);
            return;
        }
        if(!this.handlers.checkTagKey(newTagKey)){
            alert(this.msgErrorCheckTagKey);
            return;
        }
        if(this.state.addMode) this.handlers.addTag(newTagKey);
        if(this.state.editMode){
            this.handlers.updateTagKey(newTagKey, this.state.currentTag);
            this.setState({currentTag: undefined});
        }
        this.setState({tempValue: undefined, addMode: false, editMode:false});
    }
    cancelButtonClick = () => {
        this.setState({tempValue: undefined, addMode: false, editMode:false});
    }

    render() {
        return (
            <div id="tags_area" className="controls_block">
                <label>Список тегов для модификации запроса</label>
                <div className="btn_block">
                    <button
                        id="clr_tag_btn"
                        disabled={this.state.addMode || this.state.editMode}
                        onClick={this.clearButtonClick}>Очистить</button>
                    <button
                        disabled={this.state.addMode || this.state.editMode}
                        onClick={this.searchButtonClick}>Найти в запросе</button>
                </div>
                <table id="tags_list">
                    <thead>
                    <tr>
                        <th colSpan="2">имя тэга</th>
                        <th colSpan="2">подстановка значения</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.tags.map(tag => (
                        <Tag
                            key = {tag.key}
                            tag = {tag}
                            handlers = {{
                                updateTagHandler: this.handlers.updateTag,
                                clickTagHandler: this.clickTag}}
                            isCurrent = {this.state.currentTag === tag.key}/>
                    ))}
                    </tbody>
                </table>
                <div className="btn_block">
                    <button
                        id="add_tag_btn"
                        disabled={this.state.addMode || this.state.editMode}
                        onClick={this.addButtonClick}>+</button>
                    <button
                        id="rem_tag_btn"
                        disabled={this.state.addMode || this.state.editMode}
                        onClick={this.remButtonClick}>-</button>
                    <button
                         id="edt_tag_btn"
                         disabled={this.state.addMode || this.state.editMode}
                         onClick={this.editButtonClick}>...</button>
                    <div hidden={!this.state.addMode && !this.state.editMode}>
                        <input
                            type="text"
                            placeholder={this.state.addMode ? this.addPlaceholder : undefined}
                            value={this.state.tempValue}
                            onChange={(event) => {
                                this.setState({tempValue: event.target.value})}
                            }
                            onKeyUp={(event) => {
                                if(event.key === "Enter") this.saveButtonClick();
                            }}
                        />
                        <button
                            onClick={this.saveButtonClick}>Сохранить</button>
                        <button
                            onClick={this.cancelButtonClick}>
                            Отменить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TagControls;