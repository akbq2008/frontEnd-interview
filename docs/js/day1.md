# 生成不重复的数组

<template>
  <div >
   <img src="~@images/day1-bg.jpg" @click="isShow=true">
  <VideoOverLay :src="currentImg" :isShow="isShow" @closeOverLay="closeOverLay"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow:false,
      currentImg:require('@images/day1-bg.jpg')
    }
  },
  methods:{
    closeOverLay(){
      this.isShow=false
    }
  }
}
</script>

题目来源于https://github.com/haizlin/fe-interview

## 解题思路

首先生成的得为长度为 5 不重复的数组，且值为 2~32 之间，所以可以用 Math.ceil 于 Math.random()配合,这里不能用 Math.floor,因为 Math.random 取值为[0,1)

## 答案(仅供参考)

```js
function create() {
  let arr = [];
  let num = Math.ceil(Math.random() * 32);
  if (arr.length === 5) {
    return arr;
  } else {
    if (num >= 2 && !arr.includes(num)) {
      arr.push(num);
    }
    create();
  }
}
create();
```
