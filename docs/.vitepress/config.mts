import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "SnhAenIgseAl",
    description: "SnhAenIgseAl's website.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: 'Uniapp笑传', link: '/uniapp/index' },
            { text: 'Electron笑传', link: '/electron/index' },
        ],

        sidebar: [
            {
                text: 'Uniapp笑传',
                items: [
                    { text: 'UView-Plus 返回顶部组件无效果', link: '/uniapp/scroll-top' },
                ]
            },
            {
                text: 'Electron笑传',
                items: [
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/SnhAenIgseAl' }
        ],
        search: {
            provider: 'local',
        }
    }
})
