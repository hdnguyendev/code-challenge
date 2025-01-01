# Task

Provide 3 unique implementations of the following function in TypeScript.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

# Solution

## 1. Using a loop 

**Time Complexity**: `O(n)`, n is the input number, the loop runs from 1 to n, so the total number of interations is proportional to n

- Simple and easy to understand, the time complexity is proprortional to n -> the excution time increases as n gets larger but it doesn't consume much memory, it only used a few variables

```typescript
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

## 2. Using the formula for sum of first n natural numbers 

**Time Complexity**: `O(1)`, only a few arithmetic operations

- The fastest and most efficient approach because the formula requires only a few simple arthmetic operations, but you need to understand the mathematical

```typescript
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}
```

## 3. Using recursion

**Time Complexity**: `O(n)`, the function recusively calls itself n times until reaches the base case

- This approach can be easy to understand in some case and helps demonstrate how recursion works but recursion can consume more memory, this can lead to stack overflow error for large values of n

```typescript
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}
```


