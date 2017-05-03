/**
 * Created by kiny on 16/9/7.
 */
import React from 'react';

import './css/main.scss'; // 导入全局样式

import PS from './props';
import User from './components/user/user';
import MyForm from "./form";
import Life from "./life-cycle";

export default class App extends React.Component {
  render() {
    return (
      // 程序入口组件
      <div>
        <MyForm />
        <User />
        <Life />
        <PS title="属性" />
      </div>
    );
  }
}
