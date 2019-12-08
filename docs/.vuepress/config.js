const path = require('path');
var os = require('os'),
    ip = '',
    ifaces = os.networkInterfaces() // 获取本机ip

for (var i in ifaces) {
    for (var j in ifaces[i]) {
        var val = ifaces[i][j]
        if (val.family === 'IPv4' && val.address !== '127.0.0.1') {
            ip = val.address
            break
        }
    }
}
module.exports = {
    title: '我的解题之路',
    description: '砥砺前行！',
    host: ip,
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },

    // 导航
    themeConfig: {
        repo: 'akbq2008/frontEnd-interview',
        // 将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 'Edit this page' 链接。
        docsDir: 'docs',
        docsBranch: "dev",
        repoLabel: '查看源码',
        editLinks: true,
        // 默认为 'Edit this page'
        editLinkText: '帮助我改善此页面！',
        serviceWorker: {
            updatePopup: true,
            //将开启一个能够刷新内容的弹窗。当网站更新（即 Service Worker 更新）时，它会提供一个 refresh 按钮，允许用户立刻刷新内容。
            // 如果设置为 true, 默认的文本配置将是:  
            updatePopup: {
                message: '有新的资源可用',
                buttonText: '点击刷新'
            }
        },
        lastUpdated: 'Last Updated', //最后更新时间
        displayAllHeaders: true,
        // 侧边栏只会显示由当前活动页面的标题（headers）组成的链接，你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [ // 内部链接 以docs为根目录
            {
                text: '我的博客',
                link: 'https://www.suanliutudousi.com/'
            }, // 外部链接
            // 下拉列表
            {
                text: 'GitHub',
                items: [{
                    text: 'GitHub地址',
                    link: 'https://github.com/akbq2008'
                }]
            },
            {
                text: '前端',
                items: [
                    {
                        text: 'vue',
                        link: '/vue/'
                    },
                    {
                        text: 'js',
                        link: '/js/'
                    },
                    {
                        text: 'css',
                        link: '/css/'
                    }
                ]
            }
        ],
        sidebar: 'auto'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@images': path.resolve(__dirname, 'images')
            }
        }
    }
}