# Drag and Drop
Drag and Drop 指的是 HTML5 中的一项新特性，它可以帮助开发者实现拖放功能，让用户可以将页面上的元素拖动到其他位置。这个功能在许多应用程序中都是非常有用的，例如在图片库中将图片拖到编辑区域，在任务列表中将任务拖到不同的类别中等等。

## HTML5 Drag and Drop API
在实现拖放功能时，我们需要使用 HTML5 中提供的 Drag and Drop API，主要包括以下三个事件和两个方法：
事件
- dragstart：当用户开始拖动元素时触发的事件
- dragover：当拖动元素进入可接受的放置区域时触发的事件
- drop：当拖动元素在可接受的放置区域松开鼠标时触发的事件
方法
- setData(format, data)：设置要拖动的数据，format 表示数据格式，data 表示要传递的数据
- getData(format)：获取拖动的数据，format 表示数据格式

## 实现拖放功能
实现拖放功能主要分为两个步骤：
1. 设置要拖动的元素
    首先，我们需要设置一个元素可以被拖动。在这个元素上添加 draggable="true" 属性即可：
    ```html
    <div draggable="true">
      拖动我
    </div>
    ```
    此外，我们还需要为这个元素添加 dragstart 事件，以便在开始拖动元素时设置要拖动的数据：
    ```html
    <div draggable="true" @dragstart="dragStart">
      拖动我
    </div>
    ```
    ```js
    methods: {
      dragStart(event) {
      event.dataTransfer.setData('text/plain', 'Hello World!');
      }
    }
    ```
2. 设置放置区域
    接下来，我们需要设置一个或多个可以接受拖放元素的放置区域。这可以通过添加 `ondragover` 和 `ondrop` 事件来实现。其中，`ondragover` 事件用于指定哪些元素可以接受拖动元素，而 `ondrop` 事件则用于在拖动元素放置在放置区域时执行一些操作。
    ```html
    <div @dragover.prevent @drop="drop">
      放置区域
    </div>
    ```
    ```js
    methods: {
      drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        console.log(data);
        }
    }
    ```
    注意，我们需要在 ondragover 事件中调用 event.preventDefault() 方法，以允许元素在放置区域内被拖放。

## 示例
```html
<!DOCTYPE html>
<html>
<head>
  <title>Drag and Drop Example</title>
  <style>
    #drop-area {
      width: 500px;
      height: 300px;
      border: 2px dashed #ccc;
      text-align: center;
      font-size: 20px;
      line-height: 300px;
    }

    #image-preview {
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <div id="drop-area">
    将图片拖拽至此处
  </div>

  <img id="image-preview" src="" alt="Preview">

  <script>
    const dropArea = document.getElementById("drop-area");
    const imagePreview = document.getElementById("image-preview");

    // 防止浏览器默认打开文件
    dropArea.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    // 处理文件拖拽事件
    dropArea.addEventListener("drop", (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result;
        imagePreview.setAttribute("src", imageUrl);
      };

      reader.readAsDataURL(file);
    });
  </script>
</body>
</html>
```
在这个例子中，我们使用了 HTML5 的 Drag and Drop API 来监听用户拖拽文件的操作，并将文件转换成一个可预览的图片。当用户将文件拖拽到 drop-area 区域时，drop 事件被触发，并且我们使用 FileReader 对象将文件转换成一个 URL，然后将这个 URL 设置为 <img> 元素的 src 属性，从而显示出预览图像。

需要注意的是，为了防止浏览器默认打开文件，我们需要在 dragover 事件处理程序中调用 preventDefault() 方法。