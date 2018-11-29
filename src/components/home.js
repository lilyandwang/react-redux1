import React,{Component} from "react";
import {connect} from "react-redux";

class Home extends Component{
    render(){
        let {inputVal,todoList} = this.props;
        return(
            <div>
               <input type="text" value={inputVal} onChange={this.props.handleChange}/>
                <button onClick={this.props.handleAdd}>添加</button>
                <ul>
                    {
                        todoList.map((item,index)=>{
                            return <li key={index}>
                                {item}
                                <button onClick={this.props.handleDel}>删除</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    inputVal:state.numReducers.inputVal,
    todoList:state.numReducers.todoList
})
const mapDispatchToProps =(dispatch) =>({
    handleChange(e){
        let val = e.target.value;
        dispatch({
            type:"CHANGE_INPUT",
            value:val
        })
    },
    handleAdd(){
        dispatch({
            type:"ADD_ITEM"
        })
    },
    handleDel(){
        dispatch({
            type:"DEL_ITEM"
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);