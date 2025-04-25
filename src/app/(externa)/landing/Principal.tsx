import Botao from "@/app/shared/Botao";

export default function Principal() {
  return (
    <div className="flex flex-col justify-center items-center h-[450px] gap-10 text-jus">
      <h1 className=" font-black text-6xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-400 leading-[75px]">
        Landing Page com Next.js
      </h1>
      <h2 className="text-zinc-500 w-3/4">
        Somos mais do que uma agência de viagens: somos curadores de
        experiências extraordinárias. Do mergulho com arraias em ilhas tropicais
        às trilhas secretas em florestas ancestrais, passando por aldeias
        culturais esquecidas pelo tempo — cada destino que oferecemos é uma
        porta aberta para a descoberta.
      </h2>
      <div className="flex gap-3">
        <Botao url="/home" maior destacado>
          {" "}
          Iniciar Aqui
        </Botao>
        <Botao url="/home" maior>
          {" "}
          Sobre nós
        </Botao>
      </div>
    </div>
  );
}
