import React,{Component} from 'react'
export default class Demo extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : new Date()
        }
        this.timeId = setInterval(()=>this.tick(),1000)
    }
    tick(){
        this.setState({
            time : new Date()
        })
    }

    static getDerivedStateFromProps(nextProps,prevState){
        //函数返回结果将会被添加到state 添加/更新state的内容
        //null state 不需要任何改变
        console.log('静态生命周期函数')
        return null
    }
    getSnapshotBeforeUpdate(){
        console.log('更新前获取快照')
        return null
    }
    render(){
        console.log('render',this.state)
        return (
          <div>
            <p>Demo</p>
            {this.state.time.getSeconds()}
          </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.timeId)
    }
}