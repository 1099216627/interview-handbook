import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import nav from './configurations/nav.js'
import sidebar from './configurations/sidebar.js'

export default defineUserConfig({
  base: '/interview-handbook/',
  lang: 'zh-CN',
  title: '编程知识宝典',
  description: '记录每天学习的知识和面试题',
  head: [['link', { rel: 'icon', href: './public/images/logo.png' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: defaultTheme({
    navbar: nav,
    logo: '/images/logo.png',
    repo: 'https://github.com/1099216627',
    repoLabel: 'Github',
    lastUpdated: false,   // 禁用显示更新时间
    contributors: false,   // 禁用显示贡献者
    editLinkText: '在 GitHub 上编辑此页',
    docsRepo: '1099216627/interview-handbook',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    smoothScroll: true,//页面滚动
    sidebar: sidebar,
    sidebarDepth:2,
  }),
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      // 配置项
      appId: 'BH4D9OD16A',
    }),
  ],
})