'use client';

import { FormEvent, useCallback, useState } from "react";
import ModalWindow from "./Modal";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegistrationModal from "@/app/hooks/useRegistrationModal";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from "next/navigation";

const RegistrationModal = () => {
    const router = useRouter();
    const registrationModal = useRegistrationModal()
    const loginModal = useLoginModal();

    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    };

    const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setLastname(event.target.value);
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setLoading(true)
        const userData = {
            username: username,
            email: `${username}@email.com`,
            password: password,
        }


        try {
            const { data } = await axios.post('https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/auth/local/register', userData);
            Cookies.set('jwt', data.jwt, { sameSite: "None" });
            Cookies.set('username', data.user.username, { sameSite: "None" });
            registrationModal.onClose();
            toast.success('Регистрация выполнена!')
            router.refresh()
        } catch (error) {
            toast.error(`Ошибка!`)
        }
        setLoading(false)
    };

    const onToggle = useCallback(() => {
        registrationModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registrationModal])


    return (
        <ModalWindow isOpen={registrationModal.isOpen} title="Регистрация" onClose={registrationModal.onClose}>

            <Typography>
                <Box
                    sx={{
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {/*<TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Имя"
                            name="name"
                            autoComplete="given-name"
                            autoFocus
                            value={name}
                            onChange={handleNameChange}
                        />
                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            id="lastname"
                            label="Фамилия"
                            name="lastname"
                            autoComplete="family-name"
                            autoFocus
                            value={lastname}
                            onChange={handleLastnameChange}
                        />*/}
                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Телефон или почта"
                            name="username"
                            autoComplete="email"
                            autoFocus
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 8,
                                mb: 2,
                                bgcolor: 'error.dark',
                                ': hover': {
                                    bgcolor: 'error.main'
                                }
                            }}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Зарегистрироваться'}
                        </Button>
                        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                            Уже зарегистрированы?{' '}
                            <Typography component='button' variant='body2' onClick={onToggle} sx={{
                                mb: 2,
                                border: 'none',
                                background: 'transparent',
                                textDecoration: 'none',
                                color: 'error.dark',
                                ': hover': {
                                    color: 'error.main'
                                }
                            }}>
                                Вход
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </Typography>
        </ModalWindow>

    )
};

export default RegistrationModal;

