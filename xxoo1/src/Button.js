import React , {Component} from 'react'

export default class Button extends Component{
    constructor(){
        super()
    }
    render(){
        console.log('Button组件更新')
        return (
            <button type="button"> 
               {this.props.name}
            </button>
        )
        
    }
}

//函数 的组件
const Nav = function(props){
    return (<div style={{color : "white" , backgroundColor : "black"}}>
       {props.title}
       {props.children}
    </div>)
}

export {Nav}