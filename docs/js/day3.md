<!--
 * @Author: wang_yechao
 * @Date: 2020-03-29 15:00:02
 -->

# Array of Multiples

Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

## Examples

```js
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
```

## Notes

Notice that num is also included in the returned array.


## 答案(仅供参考)

### 解法 1

```js
function arrayOfMultiples(num, length) {
  const arr = [];
  for (let index = 1; index <= length; index++) {
    arr.push(num * index);
  }
  return arr;
}
```

### 解法 2

```js
const arrayOfMultiples = (num, length) => Array.from({ length }, (_, i) => num * (i + 1));
```
