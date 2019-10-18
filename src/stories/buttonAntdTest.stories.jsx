import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonAntd from '../components/ButtonAntd';

storiesOf('testButtonAntd', module)
  .addParameters({
    info: {inline: false, } // 文档与组件在同一页面显示
  })
  .add('基本用法',() => ( // 一个 add 表示添加一个 story
    <ButtonAntd />
  ))