import { useState } from 'react';
import './App.css';
import DiagramWrapper from './components/diagramWrapper';
import MenuAnimation from './components/menuAnimation';
import MenuDiagram from './components/menuDiagram';

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <MenuDiagram />
      <DiagramWrapper />
      <MenuAnimation />
    </section>
  )
}

export default App
