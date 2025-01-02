// using a loop
// time complexity: O(n)
// space complexity: O(1)
function sum_to_n_a(n: number): number {
	// your code here
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// using formula (n * (n + 1)) / 2
// time complexity: O(1)
// space complexity: O(1)
function sum_to_n_b(n: number): number {
	// your code here
    return (n * (n + 1)) / 2;
}

// using recursion
// time complexity: O(n)
// space complexity: O(n)
function sum_to_n_c(n: number): number {
	// your code here
    if (n === 1)   {
        return 1;
    }

    return n + sum_to_n_c(n - 1);
}

export { sum_to_n_a, sum_to_n_b, sum_to_n_c };