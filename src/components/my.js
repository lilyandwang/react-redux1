import React,{Component} from "react";
import {connect} from "react-redux";

class My extends Component{
    render(){
        let {modifyList} = this.props;
        return(
            <div>
                <label>
                    姓名：<input type="text" value={modifyList.name} onChange={this.props.handleModifyChange.bind(this,1)}/>
                </label>
                <br/>
                <label>
                    年龄：<input type="text" value={modifyList.age} onChange={this.props.handleModifyChange.bind(this,2)}/>
                </label>
                <br/>
                <label>
                    个签：<input type="text" value={modifyList.sign} onChange={this.props.handleModifyChange.bind(this,3)}/>
                </label>
                <br/>
                <button onClick={this.props.handleModifyUpdata.bind(this)}>修改</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    modifyList:state.tabReducers.modifyList
})
const mapDispatchToProps =(dispatch)=>({
    handleModifyChange(n,e){
        let val = e.target.value;
        dispatch({
            type:"MODIFY_CHANGE",
            index:n,
            value:val
        })
    },
    handleModifyUpdata(){
        dispatch({
            type:"MODIFY_UPDATA"
        })
        this.props.history.push("/list");
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(My)