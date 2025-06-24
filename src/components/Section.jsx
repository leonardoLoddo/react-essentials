export default function Section({ title, children, ...props }) {
  //'...props' restituisce tutte le ulteriori props associate all elemento
  return (
    <section {...props}>
      {/* prendo tutte le props in più come id e classname e le rilascia come props della section */}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
