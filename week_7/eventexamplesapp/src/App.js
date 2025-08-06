import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);
  const [helloMsg, setHelloMsg] = useState('');

  // a. Increment Counter
  const increment = () => setCount(count + 1);

  // b. Say Hello followed by static message
  const sayHello = () => setHelloMsg('Hello! This is a static message.');

  // Combined click handler for increment
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement Counter
  const decrement = () => setCount(count - 1);

  // Button with parameter welcome
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic event button
  const onPressHandler = () => {
    alert('I was clicked');
  };

  return (
    <div style={{ maxWidth: 400, margin: '30px auto', padding: 25, fontFamily: 'sans-serif' }}>
      <h2>Event Examples App</h2>

      {/* 1. Increment/Decrement Buttons */}
      <div style={{ margin: '16px 0' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={decrement} style={{ marginLeft: 8 }}>Decrement</button>
        <div style={{ marginTop: 8, fontSize: '18px' }}>Counter: {count}</div>
        <div style={{ color: '#2d44a7', marginTop: 5 }}>{helloMsg}</div>
      </div>

      {/* 2. Say Welcome Button */}
      <div style={{ margin: '16px 0' }}>
        <button onClick={() => sayWelcome('Welcome')}>Say Welcome</button>
      </div>

      {/* 3. Synthetic Event OnPress */}
      <div style={{ margin: '16px 0' }}>
        <button onClick={onPressHandler}>OnPress (Click Me)</button>
      </div>

      {/* 4. Currency Convertor Component */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
