import React from 'react';
import './style.css';
import ChildCompA from './components/ChildCompA';
import ChildCompB from './components/ChildCompB';

export default function App() {
  return (
    <div>
      <h1>Lifting State up in ReactJS!</h1>
      <ChildCompA />
      <ChildCompB />
    </div>
  );
}
