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
        { text: '语义化标签', link: '/notes/html5/语义化标签.html' },
        { text: '表单增强', link: '/notes/html5/表单增强.html' },
        { text: 'Canvas', link: '/notes/html5/canvas.html' },
        { text: '媒体支持', link: '/notes/html5/媒体支持.html' },
      ]
    },
    {
      text: 'Vue',
      link: '/notes/vue/',
      collapsible: true,
      children: [
        { text: '计算属性', link: '/notes/vue/计算属性.html' },
        { text: '生命周期', link: '/notes/vue/生命周期.html' },
      ]
    },
    {
      text: 'React',
      link: '/notes/react/',
      collapsible: true,
      children: [
        {text:'react',link:'/notes/react/hooks.html'},
      ]
    },
  ]
}