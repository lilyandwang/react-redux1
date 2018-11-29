const defaultState = {
    name:"",
    age:"",
    sign:"",
    list:[],
    modifyIndex:-1,
    modifyList:{}
}
export default(state = defaultState,action)=>{

    switch(action.type){
        // input里面写内容
        case "CHANGE":
            let change = JSON.parse(JSON.stringify(state));
            switch(action.index){
                case 1:              
                    change.name = action.value;
                    break;
                case 2:
                    change.age = action.value;
                    break;
                case 3:
                    change.sign = action.value;
                    break;
            }
        return change;
        // 添加内容
        case "ADD":
            let add = JSON.parse(JSON.stringify(state));
            let obj = {};
            obj.name = add.name;
            obj.age = add.age;
            obj.sign = add.sign;
            add.list.push(obj);
            add.name="";
            add.age="";
            add.sign="";
            console.log(add);
        return add;
        // 删除内容
        case "DEl":
            let del = JSON.parse(JSON.stringify(state));
            del.list.splice(action.value,1);
        return del;
        // 修改内容
        case "MODIFY":
            let modify = JSON.parse(JSON.stringify(state));
            modify.modifyIndex = action.value;
            let modifyObj = modify.list[action.value];
            modify.modifyList = {...modifyObj};
        return modify;
        // 修改数据
        case "MODIFY_CHANGE":
            let modifyChange = JSON.parse(JSON.stringify(state));
            switch(action.index){
                case 1:
                    modifyChange.modifyList.name=action.value;
                    break;
                case 2:
                    modifyChange.modifyList.age = action.value;
                    break;
                case 3:
                    modifyChange.modifyList.sign = action.value;
                    break;
            }
            return modifyChange;
        // 修改数据返回
        case "MODIFY_UPDATA":
            let modifyUpdata = JSON.parse(JSON.stringify(state));
            modifyUpdata.list.splice(modifyUpdata.modifyIndex,1,modifyUpdata.modifyList);
            modifyUpdata.modifyIndex = -1;
            modifyUpdata.modifyList={};
            return modifyUpdata;    
    }
    return state;
}