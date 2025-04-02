import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "SnhAenIgseAl",
    description: "SnhAenIgseAl's website.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'Uniapp踩坑日记',
                items: [
                    { text: 'UView-Plus 返回顶部组件无效果', link: '/uniapp/scroll-top' },
                ]
            },
            {
                text: 'Electron踩坑日记',
                items: [
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/SnhAenIgseAl' }
        ],
        search: {
            provider: 'local'
        },
    }
})
