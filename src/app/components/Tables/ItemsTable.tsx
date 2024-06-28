'use client'

import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button, Box, ButtonGroup, Typography } from '@mui/material';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ItemsProps, UserProps } from '@/app/types';
import { Mail, Phone, Telegram, WhatsApp } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useLoginModal from '@/app/hooks/useLoginModal';
import { addItemToUser } from '@/app/api/addItemToUser';
import { setBalance } from '@/app/api/changeBalance'

function ItemsTable({ items, currentUser, avilableItemsIds }: { items: ItemsProps[], currentUser: UserProps, avilableItemsIds: number[] }) {
  const router = useRouter()
  const loginModal = useLoginModal()
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const buyContacts = async ({ price, id }: { price: number, id: number }) => {
    if (!currentUser) {
      loginModal.onOpen()
      setIsOpen(false)
      return;
    }
    if (currentUser.balance < price) {
      toast.error(`Недостаточно средств! Стоимость ${price}, у Вас ${currentUser.balance}`)
      router.push('/wallet')
      setIsOpen(false)
      return;
    }
    const value = currentUser.balance - price;

    try {
      setBalance({ currentUser: currentUser, value: value })
    } catch (error: any) {
      toast.error('Ошибка')
      return null;
    }
    try {
      addItemToUser({ currentUser: currentUser, id: id })
    } catch (error: any) {
      toast.error('Ошибка')
      return null;
    }
    setIsOpen(false)
    toast.success('Успешно выполнено')
    router.refresh()
    return;
  }

  const icons: { [key: string]: JSX.Element } = {
    whatsapp: <WhatsApp />,
    telegram: <Telegram />,
    phone: <Phone />,
    mail: <Mail />
  }

  if (!items) return <Typography sx={{ mt: '30px' }} variant="h4">Данные не найдены</Typography>;

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
              <TableCell sx={{ width: '20%' }} component="th" scope="row">{item.attributes.name}</TableCell>
              <TableCell sx={{ width: '20%' }}>{item.attributes.type}</TableCell>
              <TableCell sx={{ width: '20%' }}>{item.attributes.city.data.attributes.name}</TableCell>
              <TableCell sx={{ width: '20%' }}>
                <Zoom>
                  <img src={item.attributes.image.data.attributes.formats?.medium.url} width="100px" height="100px" alt="" />
                </Zoom>
              </TableCell>
              <TableCell>


                {avilableItemsIds.includes(item.id) ?
                  item.attributes.contacts.map((contact) => (
                    <Button sx={{ mr: '20px', color: 'black' }} key={contact.id} variant='text' startIcon={icons[contact.type]}>
                      {contact.value}
                    </Button>
                  ))
                  :
                  <Box >
                    {isOpen ?
                      <Box >
                        <ButtonGroup variant="contained" >
                          <Button color='error' disabled>{item.attributes.price} ₽</Button>
                          <Button color='error' onClick={() => buyContacts({ price: 100, id: item.id })}>Подтвердить</Button>
                        </ButtonGroup>
                      </Box>
                      :
                      <Button variant='contained' color='error' onClick={() => setIsOpen(true)}>
                        Показать контакты
                      </Button>
                    }
                  </Box>
                }
              </TableCell>
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
