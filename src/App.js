import React from 'react';
import Calculator from './Components/Calculator';
import Quote from './Components/Quote';

function App() {
  return (
    <div>
      <Calculator />
      <Quote category="happiness" />
    </div>
  );
}

export default App;
