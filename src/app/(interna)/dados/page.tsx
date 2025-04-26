
import Titulo from "../shared/Titulo";

interface Produto {
  id: number;
  destino: string;
  data: Date;
  preco: number;
}

async function obterProdutos() {
  const url = "http://localhost:3000/dados/produtos";
  const produtos = await fetch(url, {
    next: { revalidate: 10 }, // Revalida a cada 10 segundos
    // cache: "no-store", // Não armazena em cache
  });
  return produtos.json();
}

export default async function Page() {
  const produtos = await obterProdutos();

  return (
    <div className="flex flex-col gap-10">
      <Titulo texto="Usando API" legenda="Componente com dados de uam API" />
      <div>
        {produtos.map((produto: Produto, index: number) => (
          <div
            key={produto.id}
            className={`grid grid-cols-[1fr_3fr_2fr_1fr] px-5 py-2.5 ${
              index % 2 === 0 ? "bg-zinc-800" : "bg-zinc-700"
            }`}
          >
            <span className="px-2">{produto.id}</span>
            <span className="px-2">{produto.destino}</span>
            <span className="px-2">
              {new Date(produto.data).toLocaleTimeString()}
            </span>
            <span className="px-2">R$ {produto.preco}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
