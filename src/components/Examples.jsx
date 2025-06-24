import { useState } from "react";

import { EXAMPLES } from "../data.js";
// import dei dati

import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  //le funzioni hook di react possono essere richiamate solo dentro alla funzione di un componente di react

  function handleSelect(selectedButton) {
    //una convenzione di nomenclatura delle funzioni é dare come nome handle seguito dal nome dell'evento del quale si deve occupare
    setSelectedTopic(selectedButton);
    //settando un nuovo valore per una costante useState, react viene sollecitato e eseguire di nuovo la funzione componente App()
  }

  let tabContent = <p>Per favore seleziona un argomento</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
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
    <Section id="examples" title="Esempi">
      <Tabs
        //ButtonsWrapper="menu" -- in questo modo posso passare un elemento built in come stringa oppure un componente con la sintassi buttonsWrapper={Componente}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic == "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            {/* wrappo la funzione handler in una funzione in modo da poter inserire le tonde per i parmetri senza far scattare handleSelect */}
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
