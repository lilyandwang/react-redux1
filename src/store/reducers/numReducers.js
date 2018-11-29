const defaultState ={
    inputVal:"",
    todoList:[]
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case "CHANGE_INPUT":
            let changeIuput =JSON.parse(JSON.stringify(state));
           changeIuput.inputVal = action.value;
            return changeIuput;
        case "ADD_ITEM":
            let addItem = JSON.parse(JSON.stringify(state));
            addItem.todoList.push(addItem.inputVal);
            addItem.inputVal = "";
            return addItem;
        case "DEL_ITEM":
            let delItem = JSON.parse(JSON.stringify(state));
            delItem.todoList.splice(action.value,1);
            return delItem;
    }
    return state;
}