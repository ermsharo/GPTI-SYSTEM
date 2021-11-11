import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DescriptionIcon from '@mui/icons-material/Description';
import { useNavigate } from "react-router-dom"


import { theme } from '../../App';
export function createDataAvaliacao(nome, status, duracao, data_limite, nota, type) {
  return { nome, status, duracao, data_limite, nota, type };
}

export function createDataRevisao(nome, status, data_limite, nota, type) {
  return { nome, status, data_limite, nota, type };
}


export function DataTable({columns, rows, isReview}) {
  let statusData = {};
  const navigate = useNavigate();

  if(isReview) {
    statusData.progress = ["/prova_review", theme.palette.progress.main];
    statusData.success = ["/prova_review_professor", theme.palette.success.main];
    statusData.failed = ["/prova_expirada", theme.palette.failed.main];
  } else {
     statusData.progress = ["/prova_home_new", theme.palette.progress.main];
     statusData.success = ["/prova_home_review", theme.palette.success.main];
     statusData.failed = ["/prova_expirada", theme.palette.failed.main];
  }

  statusData.warning = ["/prova_review_aluno", theme.palette.warning.main];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => {
                    navigate(statusData[row["type"]][0]);
                  }} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                          <TableCell key={column.id} align={column.align} sx={{color: statusData[row["type"]][1]}} >
                            {column.id === "nome" && <DescriptionIcon/>}
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
