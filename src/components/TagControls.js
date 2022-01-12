import React from 'react';
import TagRedux from "../containers/TagRedux";

class TagControls extends React.Component {
    constructor(props) {
        super(props);
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
    addButtonClick = () => {
        this.props.setTagsAddMode(true);
    }
    remButtonClick = () => {
        if(this.props.currentTag === null){
            alert(this.msgErrorEmptyCurrentTag);
            return;
        }
        if(window.confirm(this.msgConfirmDeleteTag)) this.props.remTag(this.props.currentTag);
        this.props.setCurrentTag(null);
    }
    editButtonClick = () => {
        if(this.props.currentTag === null){
            alert(this.msgErrorEmptyCurrentTag);
            return;
        }
        this.props.setTagsEditMode(true);
        this.props.setTempTagKey(this.props.currentTag);
    }
    clearButtonClick = () => {
        const emptyList = [];
        if(window.confirm(this.msgConfirmClearTags)) this.props.setTags(emptyList);
        this.props.setCurrentTag(null);
        this.props.setTempTagKey("");
    }
    searchButtonClick = () => {
        if(window.confirm(this.msgConfirmSearchTags)) {
            const newTags = this.props.queryModifier.searchTags(this.props.query);
            this.props.setTags(newTags);
            this.props.setCurrentTag(null);
        }
    }
    analyseButtonClick = () => {
        const label = "Анализ тегов в исходном запросе";
        const header = ["Имя","Количество подстановок","в т.ч. строк","Количество добавлений","в т.ч. строк",
            "Количество удалений","в т.ч. строк"];
        const values = this.props.queryModifier.analyseTags(this.props.query);
        this.props.setResult({label: label, header: header, values: values});
        this.props.setResultHasError(false);
        this.props.setResultError("");
    }
    saveButtonClick = () => {
        let newTagKey = this.props.tempTagKey;
        if(this.isTagsContains(newTagKey)){
            alert(this.msgErrorDuplicateTagName);
            return;
        }
        if(!this.props.queryModifier.checkTagKey(newTagKey)){
            alert(this.msgErrorCheckTagKey);
            return;
        }
        if(this.props.tagsAddMode) this.props.addTag(newTagKey);
        if(this.props.tagsEditMode){
            this.props.updateTagKey(newTagKey, this.props.currentTag);
            this.props.setCurrentTag(null);
        }
        this.props.setTagsEditMode(false);
        this.props.setTagsAddMode(false);
        this.props.setTempTagKey("");
    }
    cancelButtonClick = () => {
        this.props.setTagsEditMode(false);
        this.props.setTagsAddMode(false);
        this.props.setTempTagKey("");
    }
    updateTempTagKey = (event) => {
        this.props.setTempTagKey(event.target.value);
    }

    render() {
        return (
            <div id="tags_area" className="controls_block">
                <label>Список тегов для модификации запроса</label>
                <div className="btn_block">
                    <button
                        id="clr_tag_btn"
                        disabled={this.props.tagsEditMode || this.props.tagsAddMode}
                        onClick={this.clearButtonClick}>Очистить</button>
                    <button
                        disabled={this.props.tagsEditMode || this.props.tagsAddMode}
                        onClick={this.searchButtonClick}>Найти в запросе</button>
                    <button
                        disabled={this.props.tagsEditMode || this.props.tagsAddMode}
                        onClick={this.analyseButtonClick}>Анализ запроса</button>
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
                        <TagRedux
                            key = {tag.key}
                            tag = {tag}
                            isCurrent = {this.props.currentTag === tag.key}/>
                    ))}
                    </tbody>
                </table>
                <div className="btn_block">
                    <button
                        id="add_tag_btn"
                        disabled={this.props.tagsEditMode || this.props.tagsAddMode}
                        onClick={this.addButtonClick}>+</button>
                    <button
                        id="rem_tag_btn"
                        disabled={this.props.tagsEditMode || this.props.tagsAddMode}
                        onClick={this.remButtonClick}>-</button>
                    <button
                         id="edt_tag_btn"
                         disabled={this.props.tagsEditMode || this.props.tagsAddMode}
                         onClick={this.editButtonClick}>...</button>
                    <div hidden={!this.props.tagsEditMode && !this.props.tagsAddMode}>
                        <input
                            type="text"
                            placeholder={this.props.tagsAddMode ? this.addPlaceholder : undefined}
                            value={this.props.tempTagKey}
                            onChange={this.updateTempTagKey}
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