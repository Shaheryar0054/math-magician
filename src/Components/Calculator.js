import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState(calculate(state, event.target.textContent));
  };

  return (
    <main>
      <h2>Let&apos;s Do Some Math!</h2>
      <section className="calculator">
        <div className="container">
          <input type="text" value={state.next || state.total || '0'} className="input" readOnly />
          <button type="button" onClick={handleClick} className="button" aria-label="All Clear">AC</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Plus Minus">+/-</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Percentage">%</button>
          <button type="button" onClick={handleClick} className="button operator" aria-label="Divide">÷</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Seven">7</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Eight">8</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Nine">9</button>
          <button type="button" onClick={handleClick} className="button operator" aria-label="Multiply">x</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Four">4</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Five">5</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Six">6</button>
          <button type="button" onClick={handleClick} className="button operator" aria-label="Subtract">-</button>
          <button type="button" onClick={handleClick} className="button" aria-label="One">1</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Two">2</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Three">3</button>
          <button type="button" onClick={handleClick} className="button operator" aria-label="Add">+</button>
          <button type="button" onClick={handleClick} className="button zero" aria-label="Zero">0</button>
          <button type="button" onClick={handleClick} className="button" aria-label="Decimal">.</button>
          <button type="button" onClick={handleClick} className="button equal" aria-label="Equals">=</button>
        </div>
      </section>
    </main>
  );
}

export default Calculator;
