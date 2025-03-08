/**
 * Fibonacci recursivo
 * 
 * 1, 1, 2, 3, 5, 8, 13, 21, 34...
 * 
 * Se aplica memoization para solucionar el problema de la cantidad
 * de calculos ejecutados.
 */

type MemoizedCalculations = Record<number, number>;

const fibWithMemoization = (n: number, memo: MemoizedCalculations = {}): number => {

  if (n <= 2) return 1;

  const fibValue = fibWithMemoization(n-1, memo) + fibWithMemoization(n-2, memo);
  memo[n] = fibValue;
  
  return fibValue;
}

console.log(fibWithMemoization(2)) // 1
console.log(fibWithMemoization(3)) // 2
console.log(fibWithMemoization(4)) // 3
console.log(fibWithMemoization(7)) // 13