import React, {Component} from 'react'

export default class Test extends Component{
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = {
            time : new Date()
        }
        
    }

    tick(){
        this.setState({
            time : new Date()
        })
    }
    //加载
    componentWillMount(){
        console.log('组件将要加载')

        this.timeId = setInterval(()=>this.tick(),1000)
    }
    componentDidMount(){
        console.log('组件已经加载')
    }

    //更新生命周期
    componentWillReceiveProps(){
        console.log('组件将要接收参数')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('组件是否应该更新')
        console.log(nextState)
        if(nextState.time.getSeconds()%2 == 0){
            return true
        }
        return false
    }
    componentWillUpdate(){
        console.log('组件将要更新')
    }
    // getSnapshotBeforeUpdate(){
    //     console.log('在更新前获取截图')
    // }
    componentDidUpdate(){
        console.log('组件更新完毕')
    }
    //卸载
    componentWillUnmount(){
        console.log('组件将要卸载')
        clearInterval(this.timeId)
    }
    render(){
        console.log('reder')
        return(
            <div style={{border : "solid black 1px"}}>
                <p>Test</p>
                <p>{this.state.time.getSeconds()}</p>
                <button type="button" onClick={()=>this.setState({})}>setState更新</button>
                <button type="button" onClick={()=>this.forceUpdate()}>forceUpdate更新</button>
            </div>
        )
    }
}

//组件两种更新方式 setState forceUpdate
//组件会随父组件的更新而更新