import React, { JSX } from "react";
import Titulo from "../shared/Titulo";
import Image from "next/image";

function carregamentoPesado(): Promise<JSX.Element> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          <Image
            src={"https://picsum.photos/600/200?random=1"}
            alt="Imagem da postagem"
            width={600}
            height={200}
            className="self-center rounded-xl mb-7"
          />
        ),
      2000
    );
  });
}

export default async function page() {
  const imagemPostagem = await carregamentoPesado();
  return (
    <div>
      <Titulo
        texto="Página de Loading"
        legenda="Demonstrando o uso de Loading"
      />
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <span className="text-zinc-500 p-7">Demorou 2 segundos</span>
        <div className="flex flex-col max-w-[600px] bg-zinc-950/50 rounded-xl pb-4">
          <span>{imagemPostagem}</span>
          <div className="flex flex-col gap-4 px-4">
            <h3 className="flex w-full justify-center font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-500 pb-3">
              Aventura sobre trilhos
            </h3>
            <p className="text-justify">
              Prepare-se para uma experiência que combina charme, nostalgia e
              exploração de alto padrão. A SCY convida você a embarcar em uma
              viagem de trem como nenhuma outra — onde cada trilho é um convite
              à aventura, cada paisagem uma obra de arte viva, e cada momento a
              promessa de algo inesquecível.
            </p>
            <p className="text-justify">
              Imagine cruzar campos dourados banhados pelo sol, florestas
              secretas que mudam de cor a cada estação, e vilarejos escondidos
              onde o tempo parece ter parado. Nossos roteiros ferroviários
              exclusivos foram desenhados para viajantes que buscam mais do que
              o destino: buscam a emoção da jornada.
            </p>

            <span>Escolha sua rota:</span>

            <ul className="list-disc list-inside py-1 space-y-2.5">
              <li>
                <strong>Expedições selvagens</strong> atravessando reservas
                naturais intocadas.
              </li>
              <li>
                <strong>Viagens culturais</strong> com paradas em cidades
                históricas e festivais locais.
              </li>
              <li>
                <strong>Rotas panorâmicas</strong> sobre pontes lendárias e
                túneis esculpidos pela natureza.
              </li>
            </ul>
            <p className="text-justify">

              Tudo isso a bordo de trens que unem o charme clássico ao conforto
              contemporâneo, com cabines elegantes, gastronomia refinada e
              vistas panorâmicas de tirar o fôlego.
            </p>

            <p className="text-justify">
              Na SCY, cada trilha sobre trilho é cuidadosamente curada para
              transformar o seu desejo de viajar em uma verdadeira obra de arte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
