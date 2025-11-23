import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "SnhAenIgseAl",
    description: "SnhAenIgseAl's website.",
    appearance: 'dark',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'Uniapp笑传', link: '/uniapp/1' },
            { text: '开源项目', link: '/project/pilipili' },
            { text: '一些小玩意', link: '/script/trinity-force' },
        ],
        sidebar: [
            {
                text: 'Uniapp 笑传之踩踩 BUG',
                items: [
                    {
                        text: 'UView-Plus 返回顶部组件无效果',
                        link: '/uniapp/1'
                    },
                    {
                        text: 'H5 打包失败 unplugin-auto-import 插件版本过高',
                        link: '/uniapp/2'
                    },
                    {
                        text: '微信小程序环境无法获取 DOM 结点',
                        link: '/uniapp/3'
                    },
                    {
                        text: '避雷 toLocalString()',
                        link: '/uniapp/4'
                    }
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
                    {
                        text: 'Strapi 微信小程序插件',
                        link: '/script/strapi-plugin-wechat-miniprogram'
                    }
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
