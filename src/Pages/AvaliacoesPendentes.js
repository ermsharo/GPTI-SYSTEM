
import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import {DataTable, createDataAvaliacao} from "../Components/TableAvaliacao/Table"

const PageBox = styled.div`
 width: 60vw; 
 margin: auto;

 @media(max-width: 1200px){
  width: 90vw; 
 }

`

export default function AvaliacoesPendentes() {
  const columns = [
    { id: 'nome', label: 'Avaliação', minWidth: 80 , align: 'center'},
    { id: 'status', label: 'Disciplina', minWidth: 100, align: 'center'},
    {
      id: 'duracao',
      label: 'Duração',
      minWidth: 80,
      align: 'center',
    },
    {
      id: 'data_limite',
      label: 'Data limite para questionamento',
      minWidth: 80,
      align: 'center',
    },
    {
      id: 'nota',
      label: 'Nota',
      minWidth: 50,
      align: 'center',
    },
  ];

  const rows = [
    createDataAvaliacao('Aval 1', 'Gestão de Projeto', '30 min', '29/09/2021', '-', 'progress'),
    createDataAvaliacao('Aval 2', 'Introdução de Sistemas de Informação', '30 min', '15/07/2021', '5.0', 'progress'),
  ]

  return (
    <>
    <Headers/>
    <PageBox>
      <DataTable columns={columns} rows={rows}/>
    </PageBox>
   </>
  )
}