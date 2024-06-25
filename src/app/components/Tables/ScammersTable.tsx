'use client'

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface ScammerProps {
  name: string;
  type: string;
  city: string;
  date: string;
  contacts: string;
  reason: string;
  proof: string;
}

const FraudTable = ({ scammers }: { scammers: ScammerProps[] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = ({ event, newPage }: { event: any, newPage: number }) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  if (!scammers) {
    return <Typography sx={{ mt: '30px' }}>Ничего не найдено</Typography>
  }
  return (
    <TableContainer component={Paper} sx={{ mt: '30px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Мошенник</TableCell>
            <TableCell>Деятельность</TableCell>
            <TableCell>Город</TableCell>
            <TableCell>Дата внесения</TableCell>
            <TableCell>Контакты</TableCell>
            <TableCell>Причина</TableCell>
            <TableCell>Ссылка на доказательства</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? scammers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : scammers
          ).map((scammer) => (
            <TableRow
              key={scammer.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{scammer.name}</TableCell>
              <TableCell>{scammer.type ? scammer.type : '-'}</TableCell>
              <TableCell>{scammer.city ? scammer.city : '-'}</TableCell>
              <TableCell>{scammer.date ? scammer.date : '-'}</TableCell>
              <TableCell>{scammer.contacts ? scammer.contacts : '-'}</TableCell>
              <TableCell>{scammer.reason ? scammer.reason : '-'}</TableCell>
              <TableCell>
                {scammer.proof ?
                  <a href={scammer.proof} target="_blank" rel="noopener noreferrer" style={{ color: '#C40C0C', textDecoration: 'none' }}>
                    Смотреть
                  </a>
                  :
                  '-'
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        labelRowsPerPage="Строк на странице"
        rowsPerPageOptions={[10, 50, 100]}
        component="div"
        count={scammers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={() => handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default FraudTable;
