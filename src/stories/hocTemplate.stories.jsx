import React from 'react';
import { storiesOf } from '@storybook/react';
import HOCTemplate from '../components/HOCTemplate/index.jsx'

storiesOf('testHOC', module)
  .addParameters({
    info: {inline: true, } // 文档与组件在同一页面显示
  })

  .add('HOC测试用例', () => (  // 这里是另一个 story
    <HOCTemplate />
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