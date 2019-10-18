// config.js
import { configure, addDecorator, } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// 样式导入
import '../src/global.css'
import '../src/assets/antd.min.css'

const req = require.context('../src/stories', true, /\.stories\.jsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withInfo)


configure(loadStories, module);