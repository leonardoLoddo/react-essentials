import reactLogo from "../assets/react-core-concepts.png";
// importare l'immagine in questo modo scongiura il rischio di perdere la stessa nella fase di build

const reactDescriptions = ["fondametali", "cruciali", "chiave"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactLogo} alt="Atomo stilizzato" />
      {/* richiamo l'immagine importata sopra */}

      <h1>React Essentials</h1>
      <p>
        Concetti {description} di React di cui avrai bisogno per quasi ogni app
        che costruirai!
      </p>
    </header>
  );
}