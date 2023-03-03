/*
 * @Author: Li Xingxing
 * @Email: lixingxing@everimaging.com
 * @Date: 2023-03-03 16:27:25
 * @Description: 
 */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement("div");
  document.body.appendChild(container);
  console.log(container)
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  console.log(container)
});