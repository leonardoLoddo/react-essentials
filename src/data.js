import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Componenti",
    description:
      "Il blocco costruttivo principale dell’interfaccia utente – componi l’interfaccia combinando più componenti.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Restituisce codice HTML (simile) – potenzialmente dinamico – per definire il markup effettivo da renderizzare.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Rendi i componenti configurabili (e quindi riutilizzabili) passando loro dati in ingresso.",
  },
  {
    image: stateImg,
    title: "Stato",
    description:
      "Dati gestiti da React che, quando cambiano, causano il re-rendering del componente e l’aggiornamento dell’interfaccia.",
  },
];
