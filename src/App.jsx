import {useState} from 'react';

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from './data.js';
// import dei dati

import Header from './components/Header.jsx'
//importo il componente Header
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  //le funzioni hook di react possono essere richiamate solo dentro alla funzione di un componente di react

  function handleSelect(selectedButton) {
    //una convenzione di nomenclatura delle funzioni é dare come nome handle seguito dal nome dell'evento del quale si deve occupare
    setSelectedTopic(selectedButton)
    //settando un nuovo valore per una costante useState, react viene sollecitato e eseguire di nuovo la funzione componente App()
  }

  let tabContent = <p>Per favore seleziona un argomento</p>;
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
      </div>
    );
  }
  //se un argomento é selezionato allora richiamo dinamicamente le relative informazioni importate da data.js

  return (
    <div>
      <Header /> {/*self closing utilizzando / nel tag di apertura */}
      <main>
        <section id="core-concepts">
          <h2>Concetti Chiave</h2>
          <ul>
            {CORE_CONCEPTS.map(concept=><CoreConcept key={concept.title} {...concept}/>)}
            {/* con il metodo '.map' restituisco una copia dell'array 'CORE_CONCEPTS' dove ogni elemento é un elemento jsx */}
            {/* quando richiamiamo un array di elementi jsx react prevede un attributo 'key', ogni elemento deve avere un valore associato univoco es.: titolo, indice */}
            {/* con la sintassi '...concept' (spread operator) vado a restituire tutte le coppie chiave valore contenute */}
          </ul>
        </section>
        <section id="examples">
          <h2>Esempi</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            {/* wrappo la funzione handler in una funzione in modo da poter inserire le tonde per i parmetri senza far scattare handleSelect */}
            <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
