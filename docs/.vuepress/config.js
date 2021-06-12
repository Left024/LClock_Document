module.exports = {
  head: [
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', href: '/favicon-16x16.png' }]
  ],
  title: 'L-Clock',
  description: '让你的老旧设备重获新生',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/循环模式' },
      { text: '更新日志', link: '/changelog' },
      { text: '下载', link: '/download' },
      { text: '激活码购买', link: 'https://shop.left.pink' }
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
        'guide/YouTube',
      ]
    }
  ]
  }
}
