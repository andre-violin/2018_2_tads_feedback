import React from "react"

import dados from "../data.json"
import Card from "./Card"

const mostraDados = dado => 
    <Card key={dado.id} nome={dado.nome} comentario={dado.comentario} />
 

const Relatorio = () => 
  <div>
    <h1>Relatório</h1>
    {dados.map(dado => mostraDados(dado))}
  </div>


export default Relatorio
