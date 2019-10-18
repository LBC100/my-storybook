import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button} from '../components/Button/Btn.jsx';

storiesOf('testButton', module)
  .addParameters({
    info: {inline: true, } // 文档与组件在同一页面显示
  })

  .add('基本用法', () => ( // 一个 add 表示添加一个 story
    <Button>按钮</Button>
  ))

  .add('图标', () => (  // 这里是另一个 story
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ), 
  {
    info: {
      text: `
        自定义文档
        ~~~js
        <Button>Click Here</Button>
        ~~~
      `,
    },
  })