#### 参考资料
  ##### https://juejin.im/post/5b02970951882542ab4a3729
#### 快速开始
  ##### 1.yarn
  ##### 2.启动 yarn storybook
  ##### 3.打开 http://localhost:9001
  
#### 骨架
  ##### umi.js 
  ##### storybookjs https://github.com/storybookjs/storybook

#### 使用
  ##### 1. /stories 文件夹下新建入口文件. 格式: 文件名.stories.jsx
  ##### 2. 引入写好的展示组件 
  ``` js
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
  ```