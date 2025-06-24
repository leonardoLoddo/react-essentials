import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Componenti',
    description:
      'Il blocco fondamentale dell’interfaccia utente – componi la UI combinando più componenti.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Restituisce codice HTML (più o meno dinamico) per definire il markup che verrà effettivamente renderizzato.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Rendi i componenti configurabili (e quindi riutilizzabili) passando loro dei dati in ingresso.',
  },
  {
    image: stateImg,
    title: 'Stato',
    description:
      'Dati gestiti da React che, quando cambiano, causano il re-render del componente e l’aggiornamento della UI.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Componenti',
    description:
      'I componenti sono i blocchi fondamentali delle applicazioni React. Un componente è un modulo autosufficiente (HTML + CSS opzionale + JS) che produce un output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX è un’estensione della sintassi di JavaScript. Somiglia a un linguaggio di template, ma ha tutta la potenza di JavaScript (es. può generare contenuto dinamico).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'I componenti accettano input arbitrari chiamati "props". Sono simili agli argomenti di una funzione.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'Stato',
    description:
      'Lo stato consente ai componenti React di cambiare l’output nel tempo in risposta ad azioni dell’utente, risposte di rete o altri eventi.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};