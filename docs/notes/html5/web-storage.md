---
title: Web 存储
---

# HTML5 本地存储
HTML5 为 Web 应用程序提供了一些新的本地存储选项，使开发人员能够在客户端存储数据，而无需使用 cookies 或服务器端数据库。以下是 HTML5 中可用的本地存储选项：

## localStorage
`localStorage` 对象允许您存储键值对数据，并在浏览器关闭后仍然保留这些数据。
```js
<!-- 存储数据 -->
<script>
  localStorage.setItem('myKey', 'myValue');
</script>

<!-- 获取数据 -->
<script>
  const value = localStorage.getItem('myKey');
  console.log(value);
</script>
```
## sessionStorage
`sessionStorage` 对象允许您存储键值对数据，并在用户关闭浏览器选项卡后将其删除。
```js
<!-- 存储数据 -->
<script>
  sessionStorage.setItem('myKey', 'myValue');
</script>

<!-- 获取数据 -->
<script>
  const value = sessionStorage.getItem('myKey');
  console.log(value);
</script>
```
## IndexedDB
`IndexedDB` 允许您存储复杂的数据结构，并提供了一个异步 API，用于管理数据存储和检索。
```js
<!-- 打开数据库 -->
<script>
  const request = indexedDB.open('myDatabase', 1);

  request.onerror = function(event) {
    console.log('Database error: ' + event.target.errorCode);
  };

  request.onsuccess = function(event) {
    const db = event.target.result;
    console.log('Database opened successfully');
  };
</script>

<!-- 存储数据 -->
<script>
  const transaction = db.transaction(['myStore'], 'readwrite');
  const store = transaction.objectStore('myStore');
  const request = store.put({ id: 1, name: 'John Doe', age: 30 });

  request.onerror = function(event) {
    console.log('Error adding data: ' + event.target.errorCode);
  };

  request.onsuccess = function(event) {
    console.log('Data added successfully');
  };
</script>

<!-- 获取数据 -->
<script>
  const transaction = db.transaction(['myStore'], 'readonly');
  const store = transaction.objectStore('myStore');
  const request = store.get(1);

  request.onerror = function(event) {
    console.log('Error retrieving data: ' + event.target.errorCode);
  };

  request.onsuccess = function(event) {
    const data = event.target.result;
    console.log(data);
  };
</script>
```
