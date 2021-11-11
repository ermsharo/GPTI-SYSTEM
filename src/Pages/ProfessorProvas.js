
import * as React from 'react';
import styled from 'styled-components'
import Headers from '../Components/Header';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {DataTable, createDataProvasProfessor} from "../Components/TableAvaliacao/Table"
import Button from '@material-ui/core/Button';
import { Routes, Route, Link } from "react-router-dom";
import Icon from '@mui/material/Icon';

const PageBox = styled.div`
 width: 60vw; 
 margin: auto;

 @media(max-width: 1200px){
  width: 90vw; 
 }
`

export default function ProvasProfessor() {
  const columns = [
    { id: 'nome', label: 'Revisão', minWidth: 100, align: 'center' },
    { id: 'status', label: 'Status', minWidth: 80, align: 'center' },
    { id: 'tema', label: 'Tema', minWidth: 80, align: 'center' },
    { id: 'duracao', label: 'Duração', minWidth: 80, align: 'center' },
    {
      id: 'data_limite',
      label: 'Data limite de submissão',
      minWidth: 100,
      align: 'center'
    },
    { id: 'turma', label: 'Turma', minWidth: 80, align: 'center' },
    
  ];

  const rows = [
    createDataProvasProfessor('Aval 2','Criada','Tema 1', '60 min', '01/11/2021', 'XYZ 1',  'progress'),
    createDataProvasProfessor('Aval 4','Em Andamento','Tema 2', '10 min', '15/11/2021', 'XYZ 1',  'failed'),
    createDataProvasProfessor('Aval 6','Encerrado','Tema 3', '15 min', '17/10/2021', 'XYZ 2',  'success'),
    createDataProvasProfessor('Aval 10','Em Revisão','Tema 4', '25 min', '13/11/2021', 'XYZ 2',  'warning'),
    createDataProvasProfessor('Aval 11','Encerrado','Tema 5', '25 min', '08/11/2021', 'XYZ 3',  'success'), 
  ]

  return (
      <>
      <Headers />
      <PageBox>
        <DataTable columns={columns} rows={rows} isProfessor/>
      </PageBox>
    </>
  );
}