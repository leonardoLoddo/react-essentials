import Header from "./components/Header.jsx";
//importo il componente Header
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  return (
    <>
      <Header /> {/*self closing utilizzando / nel tag di apertura */}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
