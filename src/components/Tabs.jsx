export default function Tabs({ children, buttons, ButtonsWrapper = "menu" }) {
  //assegno un valore di default alla prop
  //rendo il componente generico e riutilizzabile tramite props
  //const ButtonsWrapper = buttonsWrapper;
  //con la sintassi '<buttonsWrapper>{buttons}</buttonsWrapper>' jsx andrebbe a cercare un elemento html built-in
  //dunque creo una costante e salvo dentro il nome del tag passato come props
  //chiamando semplicemente la prop ButtonsWrapper con la B maiuscola ovvio a questo problema
  return (
    <>
      <ButtonsWrapper>{buttons}</ButtonsWrapper>
      {/* in questo modo sono certo che jsx vada a richiamare la costante e non cerchi un elemento built-in */}
      {children}
    </>
  );
}
