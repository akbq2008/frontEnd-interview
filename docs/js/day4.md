<!--
 * @Author: wang_yechao
 * @Date: 2020-04-02 23:33:11
 -->

# Capture the Rook

Write a function that returns true if two rooks can attack each other, and false otherwise

## Examples

```js
canCapture(["A8", "E8"]) ➞ true

canCapture(["A1", "B2"]) ➞ false

canCapture(["H4", "H3"]) ➞ true

canCapture(["F5", "C8"]) ➞ false
```

## Notes

Assume no blocking pieces.
Two rooks can attack each other if they share the same row (letter) or column (number).

## 解题思路

## 答案(仅供参考)

### 解法 1

```js
function canCapture([yourRook, opponentsRook]) {
  return yourRook.charAt(0) === opponentsRook.charAt(0) || yourRook.charAt(1) === opponentsRook.charAt(1);
}
```

### 解法 2

```js
function canCapture([yourRook, opponentsRook]) {
  return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1];
}
```
