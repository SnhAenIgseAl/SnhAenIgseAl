# UView-Plus 返回顶部组件无效果
踩坑日期：2024.12.14  

### 难绷程度：
😡红温了  
😶无语了✅  
😅流汗了

### 环境
node: v22.11.0  
uview-plus: 3.3.50  
uniapp: 8.0.5  
vue: 3.4.21  

## demo复现

::: code-group

```vue [About.vue]
<template>
	<view>
        <Article :articleText="articleText"></Article>
    </view>
</template>

<script setup>
import ref from 'vue'
import Article from '@/components/Article.vue'

// 长文本
const articleText = ref('123……')
</script>
```

```vue [Article.vue]
<template>
	<view>
        <up-back-top 
			:scroll-top="scrollTop"
			icon="arrow-up"
			z-index="9999"
			duration="300"
			>
		</up-back-top>
        <view>{{ articleText }}</view>
    </view>
</template>

<script setup>
import ref from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'

const {
    articleText
} = defineProps({
    articleText: {
    	default: ''
    }
})

const scrollTop = ref(0)

onPageScroll((e) => {
	scrollTop.value = e.scrollTop
})
</script>
```

:::

父组件About.vue引入组件Article.vue后，下滑时，页面右下角没有出现返回顶部的按钮，且控制台没有报错。  
查询相关文档后，子组件Article.vue需要将onPageScroll导出

```vue
<script>
export default {
	onPageScroll() {}
}
</script>
```

难绷的地方来了，导出onPageScroll后，父组件About.vue只需要带有onPageScroll关键字Uniapp会自动引入该方法

```vue{2}
<script setup>
// 有 onPageScroll 关键字就行
import ref from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'

// 长文本
const articleText = ref('123……')
</script>
```

成了，返回顶部按钮能正常显示了。