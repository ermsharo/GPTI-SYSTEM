
import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {DataTable, createDataRevisao} from "../Components/TableAvaliacao/Table"


const PageBox = styled.div`
 width: 60vw; 
 margin: auto;

 @media(max-width: 1200px){
  width: 90vw; 
 }
`

export default function RevisoesAluno() {
  const columns = [
    { id: 'nome', label: 'Revisão', minWidth: 100, align: 'center' },
    { id: 'status', label: 'Status', minWidth: 80, align: 'center' },
    {
      id: 'data_limite',
      label: 'Data limite para questionamento',
      minWidth: 100,
      align: 'center'
    },
    {
      id: 'nota',
      label: 'Nota',
      minWidth: 50,
      align: 'center'
    },
  ];

  const rows = [
    createDataRevisao('Aval 2','Revisado','01/11/2021', 7.0, 'success'),
    createDataRevisao('Aval 4','Revisando','15/11/2021', 2.4, 'warning'),
    createDataRevisao('Aval 6','Revisado','17/10/2021', 4.9, 'success'),
    createDataRevisao('Aval 10','Revisando','13/11/2021', 3.6, 'warning'),
    createDataRevisao('Aval 11','Revisado','08/11/2021', 3.4, 'success'), 
  ]

  return (
      <>
      <Headers />
      <PageBox>
        <DataTable columns={columns} rows={rows} isReview={true}/>
      </PageBox>
    </>
  );
}