import { CORE_CONCEPTS } from "./data.js";
// import dei dati

import Header from './components/Header.jsx'
//importo il componente Header
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header /> {/*self closing utilizzando / nel tag di apertura */}
      <main>
        <section id="core-concepts">
          <h2>Concetti Chiave</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            {/* con questa sintassi vado a restituire tutte le coppie chiave valore contenute */}
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
