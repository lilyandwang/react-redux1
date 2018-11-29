import React,{Component} from "react";
import {connect} from "react-redux";
import "./list.css"

class List extends Component{
    render(){
        let {name,age,sign,list} = this.props;
        return(
            <div>
                <label>
                    姓名：<input type="text" value={name} onChange={this.props.handleChang.bind(this,1)}/>
                </label>
                <br/>
                <label>
                    年龄：<input type="text" value={age} onChange={this.props.handleChang.bind(this,2)}/>
                </label>
                <br/>
                <label>
                    个签：<input type="text" value={sign} onChange={this.props.handleChang.bind(this,3)}/>
                </label>
                <br/>
                <button onClick={this.props.handleAdd}>添加</button>

                <ul className="list-wrap">
                    {
                        list.map((item,index)=>{
                            return(
                                <div className="list-content">
                                    <li key={index}>
                                        <p>姓名：{item.name}</p>
                                        <p>年龄：{item.age}</p>
                                        <p>个签：{item.sign}</p>
                                    </li>
                                    <button onClick={this.props.handleDel}>删除</button>
                                    <button onClick={this.props.handleModify.bind(this,index)}>修改</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    name:state.tabReducers.name,
    age:state.tabReducers.age,
    sign:state.tabReducers.sign,
    list:state.tabReducers.list
})
const mapDispatchToProps=(dispatch)=>({
    handleChang(n,e){
        let val = e.target.value;
        dispatch({
            type:"CHANGE",
            value:val,
            index:n
        })
    },
    handleAdd(){
        dispatch({
            type:"ADD"
        })
    },
    handleDel(){
        dispatch({
            type:"DEl"
        })
    },
    handleModify(index){
        dispatch({
            type:"MODIFY",
            value:index
        })
        this.props.history.push("/my");
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);