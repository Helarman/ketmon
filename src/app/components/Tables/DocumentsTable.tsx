/*'use client'

import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';


function FoundDocumentsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {  
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ mt: '30px' }}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ФИО</TableCell>
            <TableCell>Тип документа</TableCell>
            <TableCell>Дата находки</TableCell>
            <TableCell>Регион</TableCell>
            <TableCell>Город</TableCell>
            <TableCell>Фотографии</TableCell>
            <TableCell>Контакты</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.documentType}</TableCell>
              <TableCell>{row.discoveryDate}</TableCell>
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell><a href={row.viewLink} target="_blank" rel="noopener noreferrer" style={{ color: '#C40C0C', textDecoration: 'none' }}>Смотреть</a></TableCell>
              <TableCell><a href={row.contactLink} target="_blank" rel="noopener noreferrer" style={{ color: '#C40C0C', textDecoration: 'none' }} >Показать контакты</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table >
      <TablePagination
        labelRowsPerPage="Строк на странице"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default FoundDocumentsTable;
*/