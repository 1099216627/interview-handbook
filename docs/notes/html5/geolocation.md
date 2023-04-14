---
title: HTML5 地理定位
---


# HTML5 地理定位
HTML5 中的 Geolocation API 允许 Web 应用程序获得用户的地理位置信息。使用 `Geolocation API`，您可以编写代码，以根据用户的实际位置为其提供个性化的体验。以下是使用 Geolocation API 的步骤：

## 1. 检测浏览器是否支持地理定位
```js
if (navigator.geolocation) {
  console.log('Geolocation is supported');
} else {
  console.log('Geolocation is not supported');
}
```
## 2. 获取用户的位置
```js
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
}, function(error) {
  console.log(error);
});
```
当用户确认共享位置信息后，`getCurrentPosition()` 方法将返回 `Position` 对象。 `Position` 对象包含经度和纬度等有关位置的信息。
## 3. 监听用户位置变化
```js
navigator.geolocation.watchPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
}, function(error) {
  console.log(error);
});
```
使用 `watchPosition()` 方法，您可以注册一个回调函数，以在用户位置发生变化时得到通知。
## 示例
以下是使用 Geolocation API 获取用户位置的完整示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Geolocation Example</title>
</head>
<body>
  <h1>Geolocation Example</h1>
  <div id="location"></div>
  <script>
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationDiv = document.getElementById('location');
        locationDiv.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
      }, function(error) {
        console.log(error);
      });
    } else {
      console.log('Geolocation is not supported');
    }
  </script>
</body>
</html>
```

