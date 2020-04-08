<!--
 * @Author: wang_yechao
 * @Date: 2020-04-08 22:52:51
 -->

# Generate a Countdown of Numbers in an Array

Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

## Examples

```js
countdown(5) ➞ [5, 4, 3, 2, 1, 0]

countdown(1) ➞ [1, 0]

countdown(0) ➞ [0]
```

## Notes

The argument will always be greater than or equal to zero.

## 答案(仅供参考)

### 解法 1

```js
function countdown(start) {
  const arr = [];
  for (let index = start; index >= 0; index--) {
    arr.push(index);
  }
  return arr;
}
```

### 解法 2

```js
const countdown = (start) => [...Array(start + 1).keys()].reverse();
```

### 解法 3

```js
function countdown(start) {
  return [...Array(start + 1)].map((_, i) => start - i);
}
```
