module.exports = {
  head: [
    ['link', { rel: 'icon', href: `https://cdn.nlark.com/yuque/0/2019/png/242808/1549571925285-2372b0a0-0234-421c-a139-00ea16f1a106.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      require('../../lib'),
      {
        html: true,
        repoUrl: 'https://www.yuque.com/vuepress/vuepress-plugin-yuque',
        home: {
          actionText: 'Getting Started →',
          actionLink: '/intro.html',
          heroImage: 'https://cdn.nlark.com/yuque/0/2019/png/242808/1549571925285-2372b0a0-0234-421c-a139-00ea16f1a106.png',
          footer: `Copyright © ULIVZ`,
          features: [
            { title: '简单', details: 'Zero-Markdown，只需配置你的语雀 repo 地址，就能获得一个 VuePress 站点' },
            { title: '轻松', details: '自动生成的文档主页、侧边栏让你体验“超轻松”的文档生成体验' },
            { title: '缓存', details: '完美地解决语雀 Open API 调用次数超限的问题' },
          ]
        }
      }
    ]
  ]
}
