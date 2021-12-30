class QueryModifier{
    querySample = "select\n" +
        "    someField as v1,\n" +
        "    /*test1_rem*/ anotherField as v2 /*/test1_rem*/\n" +
        "    /*test1_add oneMoreField as v2 /test1_add*/\n" +
        "from /*schema_set*/dbo/*/schema_set*/.someTable\n" +
        "where condition = true\n" +
        "/*test2_add and someValue = 1 /test2_add*/\n" +
        "/*test3_add and someValue != 3 /test3_add*/";

    tagsSample = [
        {key: "test1", value: false, set_mode: false, set_value: undefined},
        {key: "test2", value: true, set_mode: false, set_value: undefined},
        {key: "test3", value: true, set_mode: false, set_value: undefined},
        {key: "schema", value: false, set_mode: true, set_value: "r59"}
    ];

    checkTagKey(key){
        let keyPattern = new RegExp("^[a-z0-9_]+$","gi");
        let keyAntiPattern = new RegExp(".*_(add|rem|set).*","gi");
        return keyPattern.test(key) && !keyAntiPattern.test(key);
    }

    getTagsSet(queryText){
        let tagPattern  = new RegExp("((\\/\\*)|\\/)([a-z0-9_]+)_(add|rem|set)","gi");
        let matches = queryText.matchAll(tagPattern);
        let resultSet = new Set();
        for(let match of matches) resultSet.add(match[3].toLowerCase());
        return resultSet;
    }

    searchTags(queryText){
        return Array.from(this.getTagsSet(queryText),(tag) => (
            {key: tag, value: false, set_mode: false, set_value: undefined}
        ));
    }

    analyseTags(queryText){
        let tagSet = this.getTagsSet(queryText);
        const modes = ["set","add","rem"];
        const result = [];
        let tagPattern, matches;
        for(let tag of tagSet){
            let row = {
                key: tag,
                set: {cnt: 0, rows: 0},
                add: {cnt: 0, rows: 0},
                rem: {cnt: 0, rows: 0}
            }
            for(let mode of modes) {
                tagPattern = this.getPattern(tag + "_" + mode, true);
                matches = queryText.matchAll(tagPattern);
                for (let match of matches) {
                    row[mode]["rows"] += match[0].split('\n').length;
                    row[mode]["cnt"]++;
                }
            }
            result.push(row);
        }
        return result;
    }

    getPattern(tag, removeMode){
        let tagPattern  = "(\\/\\*)?(\\/)?" + tag + "(\\*\\/)?"
        if(removeMode){
            return tagPattern + "(.|\\n)*?" + tagPattern
        }
        return tagPattern;
    }

    removeTags(text, tagPrefix, boolCondition){
        let regex = new RegExp(this.getPattern(tagPrefix + "_rem", boolCondition),"gi");
        text = text.replace(regex, "");
        regex = new RegExp(this.getPattern(tagPrefix + "_add", !boolCondition),"gi");
        return text.replace(regex, "");
    }

    setValue(text, tagPrefix, boolCondition, value){
        if(boolCondition){
            let regex = new RegExp(this.getPattern(tagPrefix + "_set", true),"gi");
            return text.replace(regex, value);
        }
        let regex = new RegExp(this.getPattern(tagPrefix + "_set", false),"gi");
        return text.replace(regex, "");
    }

    modifyText(text, tags){
        for (let i = 0; i < tags.length; i++){
            text = this.removeTags(text, tags[i]["key"], tags[i]["value"]);
            text = this.setValue(text, tags[i]["key"], tags[i]["set_mode"], tags[i]["set_value"])
        }
        return text.replace(/(\s*\n){2,}/gi, "\n");
    }
}


export default QueryModifier;