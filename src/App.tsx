import { useState } from 'react';
import './App.css';
import DiagramWrapper from './components/DiagramWrapper';
import MenuAnimation from './components/MenuAnimation';
import MenuDiagram from './components/MenuDiagram';

function App() {
  const [displayDiagram, setDisplayDiagram] = useState("");
  const [animation, setAnimation] = useState();

  return (
    <section className="App">
      <MenuDiagram setDisplayDiagram={setDisplayDiagram} />
      <DiagramWrapper displayDiagram={displayDiagram} />
      <MenuAnimation />
    </section>
  )
}

export default App
