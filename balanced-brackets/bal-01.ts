const BRACKETS: Record<string, string> = {
  ')': '(',
  ']': '[',
  '}': '{'
}

const BRACKET_OPEN: string[] = Object.values(BRACKETS);
const BRACKET_CLOSE: string[] = Object.keys(BRACKETS);

/**
 * Se recorre solo una vez el string.
 * 
 * Se van agregando los caracteres brackets de apertura a una pila lifo.
 * Cuando se detecta que hay un bracket de cierre, se valida eliminando 
 * el ultimo bracket de apertura agregado a la pila.
 */
const isBalanced = (s: string): boolean => {

  const lifoStack: string[] = []

  for (const c of s) {
      if (BRACKET_OPEN.includes(c)) {
          lifoStack.push(c);
          continue;
      } 
      if (BRACKET_CLOSE.includes(c)) {
          if (!lifoStack.length) return false
          const deletedBracket = lifoStack.pop();
          if (deletedBracket !== BRACKETS[c]) return false;
      }
  }
  
  return lifoStack?.length === 0;
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("{{[[(())]]}}")); // true
