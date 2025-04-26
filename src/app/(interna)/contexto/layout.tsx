import React from "react";
import { DiaProvider } from "./DiaContext";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <DiaProvider>
      <div className="border-2 border-red-500 p-5">{props.children}</div>
      <div className="mt-10"><p>O componente Layout é renderizado apenas uma vez e envolve tanto a pagina A quant a pagina B com o contexto que memoriza o dia da semana selecionado.  Isso significa que o DiaProvider, que é um provedor de contexto, também é inicializado uma única vez. Assim, qualquer estado ou dado compartilhado dentro desse contexto estará disponível para todas as páginas e componentes que estão dentro do Layout, e mesmo alternado entre elas, os dados do contexto permanecem, até que o usuario acesse um elemento fora deste contexto, e então ele é desmontado.</p></div>
    </DiaProvider>
  );
}
