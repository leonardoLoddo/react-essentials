import { CORE_CONCEPTS } from "../data.js";
//import dati
import Section from "./Section.jsx";
import CoreConcept from "./CoreConcept.jsx";
export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Concetti Chiave">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
        {/* con il metodo '.map' restituisco una copia dell'array 'CORE_CONCEPTS' dove ogni elemento é un elemento jsx */}
        {/* quando richiamiamo un array di elementi jsx react prevede un attributo 'key', ogni elemento deve avere un valore associato univoco es.: titolo, indice */}
        {/* con la sintassi '...concept' (spread operator) vado a restituire tutte le coppie chiave valore contenute */}
      </ul>
    </Section>
  );
}
