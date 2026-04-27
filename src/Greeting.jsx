// src/Greeting.jsx
import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div>
      <h1>こんにちは、{name}さん</h1>
    </div>
  );
};

export default Greeting;