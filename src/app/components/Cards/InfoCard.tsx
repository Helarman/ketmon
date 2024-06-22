'use client'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ButtonGroup } from '@mui/material';
import { ContactsProps, UserProps } from '@/app/types';
import { WhatsApp, Telegram, Mail, Phone } from '@mui/icons-material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useLoginModal from '@/app/hooks/useLoginModal';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { setBalance } from '@/app/api/changeBalance';
import { addJobToUser } from '@/app/api/addJobToUser';

interface InfoCardProps {
  id: number;
  date: string;
  title: string;
  price: number;
  sallary: string;
  adress: string;
  contacts: ContactsProps[];
  isAvailable: boolean;
  currentUser: UserProps;
}

const InfoCard: React.FC<InfoCardProps> = ({ id, date, title, price, adress, contacts, isAvailable, currentUser, sallary }) => {
  const router = useRouter()
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState<boolean>(false)


  const changeBalance = async () => {
    const value = currentUser.balance - price
    await setBalance({ currentUser, value })
  }

  const addJob = async () => {
    await addJobToUser({ currentUser, id })
  }

  const buyContacts = async () => {
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
    try {
      changeBalance()
    } catch (error: any) {
      toast.error('Ошибка')
      return null;
    }
    try {
      addJob()
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

  return (
    <Card sx={{ height: '200px', pb: '10px' }}>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Typography gutterBottom variant="h4">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {sallary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {adress}
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: '10px' }}>
        {isAvailable ?
          contacts.map((contact) => (
            <Button sx={{ mr: '20px', color: 'black' }} key={contact.id} variant='text' startIcon={icons[contact.type]}>
              {contact.value}
            </Button>
          ))
          :
          <Box sx={{ width: '20%' }}>
            {isOpen ?
              <Box >
                <ButtonGroup variant="contained">
                  <Button color='error' disabled>{price}₽</Button>
                  <Button color='error' onClick={buyContacts}>Подтвердить</Button>
                  <Button color='inherit' onClick={() => setIsOpen(false)}>Отмена</Button>
                </ButtonGroup>
              </Box>
              :
              <Button variant='contained' color='error' onClick={() => setIsOpen(true)}>
                Показать контакты
              </Button>
            }
          </Box>
        }
      </CardActions>
    </Card >
  );
}

export default InfoCard;