import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "SnhAenIgseAl",
    description: "SnhAenIgseAl's website.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: 'Uniapp笑传', link: '/uniapp/scroll-top' },
            { text: '开源项目', link: '/project/pilipili' },
            { text: '一些小玩意', link: '/script/trinity-force' },
        ],

        sidebar: [
            {
                text: 'Uniapp笑传',
                items: [
                    {
                        text: 'UView-Plus 返回顶部组件无效果',
                        link: '/uniapp/scroll-top'
                    },
                ]
            },
            {
                text: '开源项目',
                items: [
                    {
                        text: '批哩批哩',
                        link: '/project/pilipili'
                    },
                    {
                        text: '叮咚记外卖',
                        link: '/project/ding-dong-ji'
                    },
                ]
            },
            {
                text: '一些小玩意',
                items: [
                    {
                        text: '哔哩哔哩评论区黄豆表情过滤',
                        link: '/script/bilibili-emoji-filter'
                    },
                    {
                        text: '三相之力指示器',
                        link: '/script/trinity-force'
                    },
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
