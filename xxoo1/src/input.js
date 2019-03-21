import React, {Component} from 'react'

//受控组件

export default class Input extends Component {
    constructor() {
        super()
        this.state = {
            value : ""
        }
    }
    handleInput(e) {
        console.log(e.target.value)
        console.log(e.nativeEvent)
        if(e.target.value.length > 10){
            return
        }
        this.setState({
            value: e.target.value
        })
    }
    render() {
        console.log('Input组件更新了')
        return(
            <input type="text" onInput={(e)=>this.handleInput(e)} value={this.state.value} />
        )
    }
}