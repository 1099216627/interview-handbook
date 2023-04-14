export default {
  '/notes/': [
    {
      text: '目录',
      link: '/notes/',
    },
    {
      text: "HTML5",
      link: '/notes/html5/',
      collapsible: true,
      children: [
        { text: '语义化标签', link: '/notes/html5/semantic-markup.html' },
        { text: '表单增强', link: '/notes/html5/form-enhancements.html' },
        { text: 'Canvas', link: '/notes/html5/canvas.html' },
        { text: '媒体支持', link: '/notes/html5/audio-video-support.html' },
        { text: 'Web Workers', link: '/notes/html5/web-workers.html' },
        { text: '本地存储', link: '/notes/html5/web-storage.html' },
        { text: '地理定位', link: '/notes/html5/geolocation.html' },
        { text: 'Web Socket', link: '/notes/html5/web-socket.html' },
        { text:'拖拽',link:'/notes/html5/drag-drop.html'},
      ]
    },
    {
      text: 'Vue',
      link: '/notes/vue/',
      collapsible: true,
      children: [
        { text: '计算属性', link: '/notes/vue/computed.html' },
        { text: '生命周期', link: '/notes/vue/lifecycle.html' },
        { text: '数据绑定', link: '/notes/vue/binding.html' }
      ]
    },
    {
      text: 'React',
      link: '/notes/react/',
      collapsible: true,
    },
  ]
}