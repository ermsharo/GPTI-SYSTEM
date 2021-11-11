import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import Button from '@mui/material/Button';
import {DataTable, createDataAvaliacao} from "../Components/TableAvaliacao/Table"

const PageBox = styled.div`
 width: 60vw; 
 margin: auto;

 @media(max-width: 1200px){
  width: 90vw; 
 }
`

export default function UseFormControl() {
  const [checkedIn, setCheckedIn] = React.useState(false);

  function checkIn() {
    if(!checkedIn) {
      alert("Presença salva!");
      setCheckedIn(true);
    }
  }

  const columns = [
    { id: 'nome', label: 'Avaliação', minWidth: 80 , align: 'center'},
    { id: 'status', label: 'Status', minWidth: 100, align: 'center'},
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
    createDataAvaliacao('Aval 1', 'Em andamento', '30 min', '-', '-', 'progress'),
    createDataAvaliacao('Aval 2', 'Em andamento', '30 min', '15/07/2021', '5.0', 'progress'),
    createDataAvaliacao('Aval 3', 'Submetida', '30 min', '02/06/2021', '9.0', 'success'),
    createDataAvaliacao('Aval 4', 'Não submetida', '30 min', '29/05/2021', '0', 'failed'),
    createDataAvaliacao('Aval 5', 'Revisão', '30 min', '22/05/2021', '4.9', 'warning'),
    createDataAvaliacao('Aval 6', 'Submetida', '30 min', '29/05/2021', '6.8', 'success'),
    createDataAvaliacao('Aval 7', 'Não Submetida', '30 min', '05/04/2021', '0', 'failed'),
    createDataAvaliacao('Aval 8', 'Revisão', '30 min', '27/03/2021', '4.0', 'warning'),
    createDataAvaliacao('Aval 9', 'Submetida', '30 min', '28/01/2021', '9.0', 'success'),
  ]

  return (
      <>
      <Headers />
      <PageBox>
        <Button color="primary" variant="contained" size="small" onClick={checkIn} style={{marginTop: "20px"}}>Check-In</Button>
        <DataTable columns={columns} rows={rows}/>
      </PageBox>
    </>
  );
}