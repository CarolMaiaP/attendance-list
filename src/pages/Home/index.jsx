import React, { useState } from 'react';

import './style.css'

import {Card} from '../../components/Card'

export function Home() {
  const [ studentName, setStudentName ] = useState();

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <h2>{studentName}</h2>
      <input
       type="text" 
       placeholder="Digite o nome"
       onChange={e => setStudentName(e.target.value)}
       />
      <button type="button">Adicionar</button>
      <Card name="Caroline" time="11:46:37"/>
      <Card name="João" time="13:20:10"/>
    </div>
  )
}

