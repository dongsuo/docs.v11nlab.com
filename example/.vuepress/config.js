module.exports = {
  title: 'Vue-Data-Board',
  description: '无代码实现数据可视化分析',
  head: [
    ['link', {
      rel: 'icon',
      href: `https://qcloudtest-1252006172.cos.ap-guangzhou.myqcloud.com/vislab_logo.png`
    }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  plugins: [
    [
      require('../../lib'),
      {
        authToken: 'QEFrEJv6x3GxYGZqe1bDM239ao0nqqRnOUhPTQ1G',
        repoUrl: 'https://www.yuque.com/slasher/ys2kwd',
        home: {
          actionText: 'Alohomora →',
          heroImage: `data:image/png;base64,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`,
          features: [
            { title: '探索数据', details: '浏览、探索你的数据，从数据出发获得灵感' },
            { title: '易于上手', details: 'No code, 无需SQL，通过简单的拖拽即可实现复杂的数据查询' },
            { title: '结果可视化', details: '灵活多样的可视化，让分析结果更生动，更有说服力' },
          ]
        },
        html: true
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-159222254-1' // UA-00000000-0
      }
    ],
    [
      'sitemap',
     {
      hostname: 'https://vislib.best'
    }]
  ]
}
