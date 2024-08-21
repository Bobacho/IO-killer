import { Header } from './components/Header';
import { useState, ReactNode } from 'react';
import { MetodoSimplex } from './components/MetodoSimplex'
import { Dual } from './components/Dual'
import { ProgramacionEntera } from './components/ProgramacionEntera'
import { ProgramacionDinamica } from './components/ProgramacionDinamica'
import { Inventarios } from './components/Inventarios'
import { TeoriaColas } from './components/TeoriaColas'

function App() {
  const [current, setCurrent] = useState<string>("Metodo simplex");
  const subjects: { [key: string]: ReactNode } = {
    "Metodo simplex": <MetodoSimplex />,
    "Dual": <Dual />,
    "Programacion entera": <ProgramacionEntera />,
    "Programacion dinamica": <ProgramacionDinamica />,
    "Inventarios": <Inventarios />,
    "Teoria de colas": <TeoriaColas />
  }
  return (
    <>
      <header>
        <Header onSendData={setCurrent} subjects={Object.keys(subjects)} />
      </header>
      <h1>
        {current}
      </h1>
      <div>
        {subjects[current]}
      </div>
    </>
  );
}

export default App;
