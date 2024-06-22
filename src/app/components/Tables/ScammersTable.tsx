/*'use client'

import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

function createData(fraudster, dateAdded, contacts, reason, proofLink) {
  return { fraudster, dateAdded, contacts, reason, proofLink };
}

const rows = [
  createData('Иван Иванов', '2024-06-04', ', +79*****1234, ivanov@example.com', 'Кража личных данных', 'http://example.com/proof5'),
  createData('Светлана Смирнова', '2024-05-30', '+79*****1234,smirnova@example.com', 'Мошенничество с кредитными картами', 'http://example.com/proof6'),
  createData('Никита Петров', '2024-06-01', 'petrov@example.com', 'Незаконное использование программного обеспечения', 'http://example.com/proof7'),
  createData('Елена Сидорова', '2024-05-28', '+79*****1234,sidorova@example.com', 'Фишинг электронной почты', 'http://example.com/proof8'),
  createData('Артем Чернов', '2024-06-03', 'chernov@example.com', 'Мошенничество в интернет-аукционе', 'http://example.com/proof9'),
  createData('Анна Кузнецова', '2024-06-02', 'kuznetsova@example.com', 'Подделка денег', 'http://example.com/proof10'),
  createData('Дмитрий Соколов', '2024-06-07', '+79*****1234,sokolov@example.com', 'Нарушение авторских прав', 'http://example.com/proof11'),
  createData('Юлия Попова', '2024-05-31', '+79*****1234', 'Продажа поддельных товаров', 'http://example.com/proof12'),
  createData('Сергей Михайлов', '2024-06-06', 'mikhailov@example.com', 'Злоупотребление корпоративными ресурсами', 'http://example.com/proof13'),
  createData('Татьяна Гордеева', '2024-06-08', '+79*****1234,gordeeva@example.com', 'Мошенничество с использованием банкоматов', 'http://example.com/proof14'),
  createData('Олег Орлов', '2024-05-29', 'orlov@example.com', 'Утечка конфиденциальной информации', 'http://example.com/proof15'),
  createData('Наталия Ермолова', '2024-06-02', '+79*****1234,ermolova@example.com', 'Поддельные инвестиции', 'http://example.com/proof16'),
  createData('Павел Новиков', '2024-06-03', 'novikov@example.com', 'Обман при страховании', 'http://example.com/proof17'),
  createData('Маргарита Тимофеева', '2024-05-27', '+79*****1234,timofeeva@example.com', 'Нелегальный оборот наркотиков', 'http://example.com/proof18'),
  createData('Владимир Жуков', '2024-06-09', 'zhukov@example.com', 'Нарушение данных банка', 'http://example.com/proof19'),
  createData('Ольга Белоусова', '2024-06-10', '+79*****1234', 'Мошенничество с ипотекой', 'http://example.com/proof20'),
  createData('Александр Костин', '2024-06-11', '+79*****1234,kostin@example.com', 'Неправомерное завладение активами', 'http://example.com/proof21'),
  createData('Екатерина Рожкова', '2024-06-04', '+79*****1234', 'Использование поддельных документов для получения кредита', 'http://example.com/proof22'),
  createData('Максим Борисов', '2024-05-30', 'borisov@example.com', 'Нелегальная перепродажа билетов', 'http://example.com/proof23'),
  createData('Вера Васильева', '2024-06-05', '+79*****1234', 'Кража торговых секретов', 'http://example.com/proof24')

];

function FraudTable() {
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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Мошенник</TableCell>
            <TableCell>Дата внесения</TableCell>
            <TableCell>Контакты</TableCell>
            <TableCell>Причина</TableCell>
            <TableCell>Ссылка на доказательства</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.fraudster}</TableCell>
              <TableCell>{row.dateAdded}</TableCell>
              <TableCell>{row.contacts}</TableCell>
              <TableCell>{row.reason}</TableCell>
              <TableCell><a href={row.proofLink} target="_blank" rel="noopener noreferrer" style={{ color: '#C40C0C', textDecoration: 'none' }}>Смотреть</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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

export default FraudTable;
*/