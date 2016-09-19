import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import SpreadDemo from './component/SpreadDemo.js';
import StateDemo from './component/Counter.js';
import LifeCycle from './component/LifeCycle.js';
import DestroyComponent from './component/DestroyComponent.js';
import HandleDOMComponent from './component/HandleDOMComponent.js';
import Refs from './component/Refs.js';
import HandleEvent from './component/HandleEvent.js';
import UseChildrenComponent from './component/UseChildrenComponent.js';
import FormApp from './component/FormApp.js';

class Mycom extends Component {
  //可以通过jsx spread来一次性传递多个属性
  render(){
    let obj={
      name:'aaa',
      style:'bbb'
    }
    return(
      <div>
        <SpreadDemo {...obj} />
        <StateDemo status='我替代了默认属性'/>
        <LifeCycle />
        <DestroyComponent />
        <HandleDOMComponent />
        <Refs />
        <HandleEvent />
        <UseChildrenComponent />
        <FormApp />
      </div>
    )
  }
}

render(<Mycom />,document.getElementById('app'));
