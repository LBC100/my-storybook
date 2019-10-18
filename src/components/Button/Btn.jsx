/* eslint-disable no-useless-constructor */
// src/components/Button.js
import React, { PureComponent } from 'react';

export class Button extends PureComponent{
  constructor (props) {
    super(props)    
  }

  render () {
    return (
      <button style={{backgroundColor: '#fff', border: '1px solid #ccc'}}>{this.props.children}</button>
    )
  }
}

