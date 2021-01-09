import React, { Component, PureComponent } from 'react';


class A extends PureComponent {
  render() {
    return (
      <div>展示组件</div>
    );
  }
}


// let HOCA = (param={}) => (WrappedComponent) => {
  
//   return class A extends PureComponent {
//     constructor(props) {
//       super(props);
//       this.state = {  }
//     }
//     render() {
//       console.log(param, WrappedComponent, this.props, '柯里化1')
//       // 删除prop
//       const { user, ...otherProps } = this.props;  // 这是一个利用es6语法技巧，经过上面的语句，otherProps里面就有this.props中所有的字段除了user.
      
//       // 增加prop 
//       // const newProps = {
//       //   uid,
//       // };
//       return (
//         <WrappedComponent {...otherProps} /* {...newProps} */ />
//       );
//     }
//   }
// }

let HOC = (param={}) => (WrappedComponent) => {
  
  return class HOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() {
      console.log(param, WrappedComponent, this.props, '柯里化1')
      const { ...otherProps } = this.props;  // 这是一个利用es6语法技巧，经过上面的语句，otherProps里面就有this.props中所有的字段除了user.
      
      return (
        <WrappedComponent
          {...otherProps}
        />
      );
    }
  }
}

HOC = HOC({text: '123'})(A)



class PerformanceTest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    console.log('子组件渲染了')
    return (
      <div>
        子组件-测试
        <HOC test={'测试'}/>
      </div>
    );
  }
}
 
export default PerformanceTest;