'use client';

import { FormEvent, useCallback, useState } from "react";
import ModalWindow from "./Modal";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegistrationModal from "@/app/hooks/useRegistrationModal";
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from 'js-cookie';

const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registrationModal = useRegistrationModal()

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {

        event.preventDefault();

        setLoading(true);

        try {
            const { data } = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: username,
                password: password,
            });
            Cookies.set('jwt', data.jwt, { sameSite: "None" });
            Cookies.set('username', data.user.username, { sameSite: "None" });
            toast.success('Вход выполнен!')
            loginModal.onClose();
            router.refresh()
        } catch (error) {
            toast.error('Ошибка входа! Проверьте данные');
        }
        setLoading(false);
    };

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registrationModal.onOpen();
    }, [loginModal, registrationModal])


    return (
        <ModalWindow isOpen={loginModal.isOpen} title="Вход" onClose={loginModal.onClose}>
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

                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            id="username "
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
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <Button

                            type="submit"
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
                            {loading ? 'Loading...' : 'Войти'}
                        </Button>
                        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                            Не зарегистрированы?{' '}
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
                                Регистрация
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </Typography>
        </ModalWindow>

    )
};

export default LoginModal;

