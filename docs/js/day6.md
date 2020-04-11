<!--
 * @Author: wang_yechao
 * @Date: 2020-04-11 20:22:36
 -->

# Both Zero, Negative or Positive

Write a function that checks if two numbers are:
Smaller than 0
Greater than 0
Exactly 0

## Examples

```js
both(6, 2) ➞ true

both(0, 0) ➞ true

both(-1, 2) ➞ false

both(0, 2) ➞ false
```

## Notes

Inputs will always be two numbers.

## 答案(仅供参考)

### 解法 1

```js
function both(n1, n2) {
  return (n1 > 0 && n2 > 0) || (n1 < 0 && n2 < 0) || (n1 == 0 && n2 == 0);
}
```

### 解法 2

```js
const both = (n1, n2) => Math.sign(n1) === Math.sign(n2);
```

### 解法 3

```js
function both(n1, n2) {
  return n1 * n2 > 0 || n1 === n2;
}
```
