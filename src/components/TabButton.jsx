export default function TabButton({children, onSelect, isSelected}) {

  
  return (
    <li>
      <button className={isSelected && 'active'} onClick={onSelect}>{children}</button>
      {/* onSelect é una funziona ma passiamo la funzione come valore, non la richiamiamo, quindi omettiamo le tonde */}
    </li>
  );
  //children é una props di default che fa riferimento al contenuto tra il tag di apertura e di chiusura del componente al momento del richiamo
}
