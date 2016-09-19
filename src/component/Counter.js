import React, { Component } from 'react';

class StateDemo extends Component {
  //定义state的三种方式
  // 1.ES 5的写法
  // getInitialState:function () {
  //   return{
  //     secondElapsed: 0
  //   }
  // }
  // 2.ES6 的写法了
  constructor(){
    super();
    this.state={
      secondsElapsed: 0
    }
  }
  // state = {
  //   secondsElapsed: 0
  // }

  tick(){
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  }

  componentDidMount(){
    this.interval = setInterval( this.tick.bind(this), 1000 );
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return (
      <div>目前已经计时：{this.state.secondsElapsed}秒,初始属性：{this.props.status}</div>
    )
  }
}
//设置默认属性
let defaultProps={
  status:'我是默认属性props'
};
StateDemo.defaultProps = defaultProps;
StateDemo.propTypes = {
  status: React.PropTypes.string.isRequired
}
export default StateDemo;
