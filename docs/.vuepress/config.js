module.exports = {
  head: [
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', href: '/favicon-16x16.png' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
  ],
  title: 'L-Clock',
  description: '让你的老旧设备重获新生',
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebarDepth: 2,
    smoothScroll: true,
    nav: [
      { text: '指南', link: '/guide/循环模式' },
      { text: '更新日志', link: '/changelog' },
      { text: '下载', link: '/download' }
	],
  sidebar: [
    {
      title: '模式',
      children: [
        'guide/循环模式',
        'guide/自定义模式',
      ]
    },
    {
      title: '功能设置',
      children: [
        'guide/微博',
        'guide/Bilibili',
        'guide/知乎',
        'guide/少数派',
        'guide/网易云音乐',
        'guide/酷安',
        'guide/YouTube',
        'guide/Twitter',
        'guide/Steam',
        'guide/Nintendo Switch',
        'guide/天气',
      ]
    }
  ]
  }
}
