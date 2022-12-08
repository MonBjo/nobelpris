import { useState } from 'react';
import './App.css';
import DiagramWrapper from './components/DiagramWrapper';
import MenuAnimation from './components/MenuAnimation';
import MenuDiagram from './components/MenuDiagram';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function App() {
  const [displayDiagram, setDisplayDiagram] = useState("");
  const [animation, setAnimation] = useState("pages");

  return (
    <section className="App">
      <MenuDiagram setDisplayDiagram={setDisplayDiagram} />
      <DiagramWrapper displayDiagram={displayDiagram} animation={animation} />
      <MenuAnimation setAnimation={setAnimation} />
    </section>
  )
}

export default App
