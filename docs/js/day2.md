<!--
 * @Author: wang_yechao
 * @Date: 2020-03-21 14:01:50
 -->

# Bitwise Operations

> A decimal number can be represented as a sequence of bits. To illustrate:

```
6 = 00000110
23 = 00010111
```

From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

```
bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001
```

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

## Examples

```
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11
```

## Notes

JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.

## 解题思路

主要是求得 2 个数的与，或和异或

## 答案(仅供参考)

### 解法 1

> 与

```js
function bitwiseAND(n1, n2) {
    const arr = []
    let large = 0
    let small = 0
    if (n2 > n1) {
        large = n2
        small = n1
    } else {
        large = n1
        small = n2
    }
    const num1 = large
        .toString(2)
        .split('')
        .reverse()
    const num2 = small
        .toString(2)
        .split('')
        .reverse()
    num1.forEach((item, index) => {
        if (index + 1 > num2.length) {
            arr.push(0)
        } else {
            if (item === num2[index]) {
                arr.push(item)
            } else {
                arr.push(0)
            }
        }
    })
    arr.reverse()
    return parseInt(arr.join(''), 2)
}
```

> 或

```js
function bitwiseOR(n1, n2) {
    const arr = []
    let large = 0
    let small = 0
    if (n2 > n1) {
        large = n2
        small = n1
    } else {
        large = n1
        small = n2
    }
    const num1 = large
        .toString(2)
        .split('')
        .reverse()
    const num2 = small
        .toString(2)
        .split('')
        .reverse()
    num1.forEach((item, index) => {
        if (index + 1 > num2.length) {
            arr.push(item)
        } else {
            if (item === num2[index]) {
                arr.push(item)
            } else {
                arr.push(1)
            }
        }
    })
    arr.reverse()
    return parseInt(arr.join(''), 2)
}
```

> 异或

```js
function bitwiseXOR(n1, n2) {
    const arr = []
    let large = 0
    let small = 0
    if (n2 > n1) {
        large = n2
        small = n1
    } else {
        large = n1
        small = n2
    }
    const num1 = large
        .toString(2)
        .split('')
        .reverse()
    const num2 = small
        .toString(2)
        .split('')
        .reverse()
    num1.forEach((item, index) => {
        if (index + 1 > num2.length) {
            arr.push(1)
        } else {
            if (item === num2[index]) {
                arr.push(0)
            } else {
                arr.push(1)
            }
        }
    })
    arr.reverse()
    return parseInt(arr.join(''), 2)
}
```

### 解法 2(最优解)

```js
function bitwiseAND(n1, n2) {
    return n1 & n2
}

function bitwiseOR(n1, n2) {
    return n1 | n2
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2
}
```
