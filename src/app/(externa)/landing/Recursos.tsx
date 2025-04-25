import React from "react";
import Recurso from "./Recurso";

export default function Recursos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Recurso
        titulo='Exprorando o Mar'
        texto="Mergulhe em águas cristalinas, descubra mundos submersos e navegue por destinos onde o oceano conta histórias."
        imagem="https://picsum.photos/250/300?random=1&grayscale"
      />
      <Recurso
        titulo='Explorando a Terra'
        texto="Caminhe por trilhas milenares, explore paisagens intocadas e sinta a força da natureza sob os seus pés."
        imagem="https://picsum.photos/250/300?random=2&grayscale"
      />
      <Recurso
        titulo='Explorando os Céus'
        texto="Voe alto em balões, plane sobre montanhas e contemple horizontes que só quem se eleva pode alcançar."
        imagem="https://picsum.photos/250/300?random=3&grayscale"
      />
       <Recurso
        titulo='Exprorando a Flora'
        texto="Percorra florestas encantadas, jardins suspensos e campos vibrantes. A natureza floresce em cada detalhe."
        imagem="https://picsum.photos/250/300?random=21&grayscale"
      />
      <Recurso
        titulo='Explorando a Cultura'
        texto="Viva o ritmo de novos povos, experimente sabores autênticos e mergulhe em tradições que atravessam séculos."
        imagem="https://picsum.photos/250/300?random=8&grayscale"
      />
      <Recurso
        titulo='Explorando a Fauna'
        texto="Encontre-se com o selvagem. Observe a vida em seu estado mais puro e conecte-se com a essência animal do planeta."
        imagem="https://picsum.photos/250/300?random=23&grayscale"
      />
    </div>
  );
}
