/**
 * Fibonacci recursivo
 * 
 * 1, 1, 2, 3, 5, 8, 13, 21, 34... 
 * 
 * El principal problema de esta solución, es la cantidad de calculos realizados 
 * y que no son memoizados.
 */

const fib = (n: number): number => {

  if (n <= 2) return 1;

  return fib(n-1) + fib(n-2);
}

console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(7)) // 13
