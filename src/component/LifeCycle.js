import React, { Component } from 'react';

class LifeCycle extends Component {
  // 这里会出错不知道为啥，用下边的defaultProps
  // props = {
  //   value: '开始渲染'
  // }
  constructor(){
    super();
    this.state={
      num:0
    }
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
    this.setState({
        value: nextProps.value
    });
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate');
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  render() {
    console.log('render');
    return <span>props value:{this.props.value}，state数字为：{this.state.num}</span>
  }

  componentDidMount() {
    console.log('componentDidMount');
    // console.log(this.props.value);
    //这里注释掉了，打开后会console 出（shouldComponentUpdate,componentWillUpdate）
    // this.interval = setInterval( this.tick.bind(this), 1000 );
  }
  tick(){
    this.setState({
      num:this.state.num+1,
    })
  }
  componentDidUpdate(prevProps,prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount(prevProps,prevState) {
    console.log('componentWillUnmount');
  }
}
LifeCycle.defaultProps={
  value:'开始渲染'
}
export default LifeCycle;
