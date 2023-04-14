---
title: Web Workers
---

# Web Workers
`Web Workers` 是 JavaScript API 中的一项技术，它允许我们在浏览器中创建多个线程，以便能够同时执行多个任务而不会影响 UI 的响应速度。

`Web Workers` 的工作方式是创建一个新的线程，该线程可以执行 JavaScript 代码，但与主线程是相互独立的。这意味着主线程和工作线程可以同时运行，而不会相互阻塞。

## 创建 Web Worker
要创建 Web Worker，我们可以使用 Worker 构造函数。该构造函数需要一个 JavaScript 文件的 URL 作为参数，该文件将在工作线程中运行。以下是一个创建 Web Worker 的示例：
```js
const worker = new Worker('worker.js');
```
在上面的示例中，我们使用 Worker 构造函数创建了一个新的 Web Worker，并将 worker.js 文件作为参数传递给它。

## 发送消息
要向 Web Worker 发送消息，我们可以使用 postMessage 方法。以下是一个发送消息给 Web Worker 的示例：
```js
worker.postMessage('Hello, worker!');
```
在上面的示例中，我们向 Web Worker 发送了一条消息，消息内容为字符串 `'Hello, worker!'`。

## 接收消息
要从 Web Worker 接收消息，我们可以为 Worker 对象添加一个 message 事件监听器。以下是一个接收来自 Web Worker 的消息的示例：
```js
worker.addEventListener('message', event => {
  console.log(`Received message from worker: ${event.data}`);
});
```
在上面的示例中，我们为 Worker 对象添加了一个 message 事件监听器，当 Web Worker 发送消息时，该监听器将被触发，我们可以在监听器中访问 event.data 属性来获取消息内容。
## 终止 Web Worker
要终止 Web Worker，我们可以使用 terminate 方法。以下是一个终止 Web Worker 的示例：
```js
worker.terminate();
```
在上面的示例中，我们使用 terminate 方法终止了 Web Worker 的执行。注意，一旦终止 Web Worker，它就无法恢复执行。
