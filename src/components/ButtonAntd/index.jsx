import React, { PureComponent } from 'react';
import { Button } from 'antd'


class ButtonAntd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Button>antd</Button>
      </div>
    );
  }
}
 
export default ButtonAntd;