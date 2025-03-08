# Balanced Brackets

Implementa una función que valide si una cadena de paréntesis, corchetes y llaves está correctamente balanceada.

```typescript
function isBalanced(s: string): boolean {
  // ...
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("{{[[(())]]}}")); // true
```