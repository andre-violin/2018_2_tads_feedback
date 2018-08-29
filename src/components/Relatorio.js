import React from "react"

import { firestore } from '../firebase/firebase'
import dados from "../data.json"
import Card from "./Card"

const info = firestore.collection( 'feedbacks' ).doc( 'p9ZyPFK784CCvzmpmYmQ' )

console.log( info )

const mostraDados = dado => 
    <Card key={dado.id} nome={dado.nome} comentario={dado.comentario} />
 

const Relatorio = () => 
  <div>
    <h1>Relatório</h1>
    {dados.map(dado => mostraDados(dado))}
  </div>


export default Relatorio
