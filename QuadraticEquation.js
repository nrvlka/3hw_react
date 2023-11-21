import React, { useState } from 'react'
import './App.js'
function QuadraticEquation() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
     const discriminant = b * b - 4 * a * c;
     if (discriminant > 0) {
       const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
       const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
       setResult(`x1 = ${x1}, x2 = ${x2}`);
     } else if (discriminant === 0) {
       const x = -b / (2 * a);
       setResult(`x = ${x}`);
     } else {
       setResult('Корней нет');
     }
  };

  return (
    <div>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
      <button onClick={calculate}>Вычислить</button>
      <p>Результат: {result}</p>
    </div>
  );
}

export default QuadraticEquation;
