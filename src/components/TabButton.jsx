export default function TabButton({ children, isSelected, ...props }) {
  //'...props' restituisce tutte le ulteriori props associate all elemento
  return (
    <li>
      <button className={isSelected && "active"} {...props}>
        {/* richiamando qua ...props tutte le props aggiunte all'istanza del componente vengono ereditate da questo bottone */}
        {children}
      </button>
    </li>
  );
  //children é una props di default che fa riferimento al contenuto tra il tag di apertura e di chiusura del componente al momento del richiamo
}
