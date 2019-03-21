import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const checkGame = function(game){
  var arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i = 0;i<arr.length;i++){
    // var index_1 = arr[i][0]
    // var index_2 = arr[i][1]
    // var index_3 = arr[i][2]
    var [index_1,index_2,index_3] = arr[i]
    if(game[index_1] !== null && game[index_1] === game[index_2] && game[index_2] === game[index_3]){
      return game[index_1]
    }
  }
  return false
}

console.log(
  checkGame(
    Array(9).fill(null)
  )
)

class History extends Component{
  render(){
    const {xIsNext,winner,history,jump} = this.props
    console.log(this.props)
    var title=''
    if(winner){
      title=`Winner is ${winner}`
    }else if(xIsNext){
      title=`下一个玩家是X`
    }else{
      title=`下一个玩家是O`
    }

    return(
      <div className="history">
        <h2>{title}</h2>
        <hr/>
        {/* {渲染} */}
        <ul>
          {
            history.map((value, key)=>{
              return(
                <li key={key}>
                  <button type="button" onClick={()=>jump(key)}>
                    跳到游戏 #{key}
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
class Square extends Component{
  render(){
    return(
      <div
       className="box"
       onClick={this.props.handleClick}
      >{this.props.index}</div>
    )
  }
}
class Board extends Component{

  getSquare(i){
    const {game,handleClick} = this.props
    return(
      <Square
       index={game[i]}
       handleClick={()=>handleClick(i)} 
      ></Square>
    )
  }
  
  render(){
    return(
      <div className="box-wrap">
         {this.getSquare(0)}
         {this.getSquare(1)}
         {this.getSquare(2)}
         {this.getSquare(3)}
         {this.getSquare(4)}
         {this.getSquare(5)}
         {this.getSquare(6)}
         {this.getSquare(7)}
         {this.getSquare(8)}
      </div>
    )
  }
}
class Game extends Component{
  constructor(){
    super()
    this.state={
      // game: Array(9).fill(null),
      history:[
        Array(9).fill(null)
      ],
      xIsNext: true,
      nowStep: 0
    }
  }
  handleClick(i){
    //i 告诉我你点击了哪个方块
    console.log(i)
    const {xIsNext,nowStep} = this.state

    let {history} = this.state
    history = history.slice(0,nowStep+1)

    //浅复制  引用类型导致一个对象被反复修改
    let game = history[nowStep].slice()

    //判断是否有赢家
    if(checkGame(game)){
      return
    }

    if(game[i]){
      return
    }
    if(xIsNext){
      game[i] = "X"
    }else{
      game[i] = "O"
    }

    this.setState(
      {
        history: history.concat([game]),
        xIsNext: !xIsNext,
        nowStep: nowStep + 1
      }
    )
  }
  jump(i){
    var xIsNext = i%2 === 0 ? true : false
    var nowStep = i
    this.setState(
      {
        xIsNext: xIsNext,
        nowStep: nowStep
      }
    )
  }
  render(){
    const {history ,xIsNext,nowStep} = this.state
    const game = history[nowStep]
    return(
      <div className="game">
         <Board game={game} handleClick={(i)=>this.handleClick(i)}></Board>
         <History jump={(i)=>this.jump(i)} history={history} xIsNext={xIsNext} winner={checkGame(game)}></History>
      </div>
    )
  }
}
class App extends Component{
  render(){
    return(
      <div>
        <Game></Game>
      </div>
    )
  }
}
export default App;
