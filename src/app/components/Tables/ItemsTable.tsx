'use client'

import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from '@mui/material';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ItemsProps } from '@/app/types';

function ItemsTable({ items }: { items: ItemsProps[] }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
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
            <TableCell>Город</TableCell>
            <TableCell>Фотографии</TableCell>
            <TableCell>Контакты</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : items
          ).map((item) => (

            <TableRow key={item.id}>
              <TableCell component="th" scope="row">{item.attributes.name}</TableCell>
              <TableCell>{item.attributes.type}</TableCell>
              <TableCell>{item.attributes.city.data.attributes.name}</TableCell>
              <TableCell>
                <Zoom>
                  <img src={item.attributes.image.data.attributes.formats?.medium.url} width="100px" height="100px" alt="" />
                </Zoom>
              </TableCell>
              <TableCell><Button variant='contained' color='error' >Показать контакты</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table >
      <TablePagination
        labelRowsPerPage="Строк на странице"
        rowsPerPageOptions={[10, 50, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default ItemsTable;
