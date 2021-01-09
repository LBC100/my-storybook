/* eslint-disable no-empty-pattern */
import React, { PureComponent } from 'react';
import { Tabs, Button } from 'antd';
import { connect } from 'dva';


const { TabPane } = Tabs;



class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const {
      handleOnChange
    } = this.props
    console.log('主页2', )
    return (
      <div>
        HOC测试页
        <Button onClick={handleOnChange}>123</Button>
      </div>
    );
  }
}

// HOCTabsLogic 开始 标签页个数
let HOCTabsLogic = (param={}) => (WrappedComponent) => {
  return class HOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {  }
    }

    handleOnChange = (key) => {
      console.log('标签逻辑1', key)
    }

    render() {
      const { ...otherProps } = this.props;  // 这是一个利用es6语法技巧，经过上面的语句，otherProps里面就有this.props中所有的字段除了user.
      
      return (
        <WrappedComponent
          {...otherProps}
          handleOnChange={this.handleOnChange}
          testData={param.testData}
        />
      );
    }
  }
}

HOCTabsLogic = connect(({
  
}) => ({ }))(HOCTabsLogic({testData: '测试数据'})(Index))
// HOCTabsLogic 结束


// HOCPermissions开始
let HOCPermissions = (param={}) => (WrappedComponent) => {
  return class HOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    
    render() {
      const { ...otherProps } = this.props;  // 这是一个利用es6语法技巧，经过上面的语句，otherProps里面就有this.props中所有的字段除了user.
      
      
      console.log('主页3', )
      return (
        <WrappedComponent
          {...otherProps}
        />
      );
    }
  }
}

HOCPermissions = HOCPermissions()(HOCTabsLogic)
// HOCPermissions结束


 
export default HOCPermissions;