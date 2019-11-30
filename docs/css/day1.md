# 使用 link 和@import 有什么区别？

1. link 是 HTML 标签，@import 是 css 提供的。
2. link 引入的样式页面加载时同时加载，@import 引入的样式需等页面加载完成后再加载。
3. link 可以通过 js 操作 DOM 动态引入样式表改变样式，而@import 不可以。

[link](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)

[@import](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import)
