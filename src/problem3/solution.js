"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum_to_n_a = sum_to_n_a;
exports.sum_to_n_b = sum_to_n_b;
exports.sum_to_n_c = sum_to_n_c;
// using a loop
// time complexity: O(n)
// space complexity: O(1)
function sum_to_n_a(n) {
    // your code here
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// using a formula (n * (n + 1)) / 2
// time complexity: O(1)
// space complexity: O(1)
function sum_to_n_b(n) {
    // your code here
    return (n * (n + 1)) / 2;
}
// using recursion
// time complexity: O(n)
// space complexity: O(n)
function sum_to_n_c(n) {
    // your code here
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_c(n - 1);
}
