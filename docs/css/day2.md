# 介绍下 BFC 及其应用

BFC 块级格式化上下文，生成一个独立的不受外部影响的容器

生成的方式有

1. html 根元素
2. postion 不为 static
3. overflow 不为 vissible
4. float 不为 none
5. display:inline-block;
   ...

### 应用

解决浮动导致的高度塌陷的问题

> 使用 overflow: auto;

```html
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

```css
.box {
  background-color: rgb(224, 206, 247);
  border: 5px solid rebeccapurple;
  overflow: auto;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

外边距塌陷问题

```html
<div class="blue"></div>
<div class="red-outer">
  <div class="red-inner">red inner</div>
</div>
```

```css
.blue,
.red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden;
  background: red;
}
```
