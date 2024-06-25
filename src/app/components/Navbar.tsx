'use client'

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, MenuItem, Typography, Menu, Container, Button, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { UserProps } from '../types';
import useLoginModal from '../hooks/useLoginModal';
import useRegistrationModal from '../hooks/useRegistrationModal';
import { signout } from '../api/auth-actions';

const Navbar = ({ currentUser }: { currentUser: UserProps }) => {
    const loginModal = useLoginModal();
    const registrationModal = useRegistrationModal();
    const router = useRouter();

    const pages = [
        { label: 'Главная', href: '/' },
        { label: 'Работа', href: '/jobs' },
        { label: 'Недвижимость', href: '/realestates' },
        { label: 'Найденные вещи', href: '/items' },
        { label: 'Мошенники', href: '/scammers' },
        { label: 'Помощь', href: '/faq' },
    ];


    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);



    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar
            position="fixed"
            style={{ backgroundColor: isScrolled ? '#C40C0C' : 'transparent', transition: 'background-color 0.3s' }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}

                            style={{ color: isScrolled ? 'white' : 'black', transition: 'color 0.3s' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                        {/*isScrolled ?
                            <img src="logo.png" style={{ height: '2rem', marginRight: '1rem' }} alt="" />
                            :
                            <img src="logo2.png" style={{ height: '2rem', marginRight: '1rem' }} alt="" />
                        */}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/*isScrolled ?
                            <img src="logo.png" style={{ height: '2rem', marginRight: '1rem' }} alt="" />
                            :
                            <img src="logo2.png" style={{ height: '2rem', marginRight: '1rem' }} alt="" />
                        */}

                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                onClick={() => router.push(page.href)}
                                style={{ color: isScrolled ? 'white' : 'black', transition: 'color 0.3s' }}
                                sx={{ my: 2, display: 'block' }}

                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                    {currentUser ?
                        <Box sx={{ flexGrow: 0 }}>
                            <Button
                                onClick={() => router.push('/wallet')}
                                style={{ color: isScrolled ? 'white' : 'black', transition: 'color 0.3s' }}
                                variant="text"
                            >
                                {currentUser.balance}₽
                            </Button>
                            <Tooltip title="Open settings">
                                <Button
                                    style={{ color: isScrolled ? 'white' : 'black', transition: 'color 0.3s' }}
                                    variant="text"
                                    onClick={handleOpenUserMenu}
                                //endIcon={<Avatar alt="UserName" />}
                                >
                                    {currentUser?.username}
                                </Button>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem disabled onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Профиль</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => router.push('/wallet')}>
                                    <Typography textAlign="center">Пополнить</Typography>
                                </MenuItem>
                                <MenuItem onClick={signout}>
                                    <Typography textAlign="center">Выйти</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        :
                        <Box sx={{ flexGrow: 0 }}>
                            <Button
                                style={{ color: isScrolled ? 'white' : 'black', transition: 'color 0.3s' }}
                                variant="text"
                                onClick={loginModal.onOpen}
                            >
                                Вход
                            </Button>
                            <Button
                                style={{ color: isScrolled ? 'white' : 'black', transition: 'color 0.3s' }}
                                variant="text"
                                onClick={registrationModal.onOpen}
                            >
                                Регистрация
                            </Button>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar >
    );
};



export default Navbar;