import { Typography, Grid, Container, Link, IconButton, Divider, Box } from '@mui/material';
import { Instagram, YouTube, Telegram, } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
            <Container maxWidth="xl">
                <Grid container spacing={3}>

                    {/*
                    <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Ссылки
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Ссылки
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Ссылки
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Ссылки
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: '8px' }}>
                            <Link color="white" underline="none" href="/" >Ссылка</Link>
                        </Typography>
                    </Grid>
                    */}
                    <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                        {/*<img src="logo.png" style={{ height: '5rem', marginBottom: '1rem' }} alt="" />*/}
                        <Box>
                            <IconButton color="inherit">
                                <YouTube />
                            </IconButton>
                            <IconButton color="inherit">
                                <Telegram />
                            </IconButton>
                            <IconButton color="inherit">
                                <Instagram />
                            </IconButton>
                        </Box>

                    </Grid>
                </Grid>
                {/*<Divider sx={{ my: '2rem', backgroundColor: 'white' }} />
                <Typography variant="body2" align="left" >
                    UCHAR KETMON &copy; {new Date().getFullYear()} 
                </Typography>*/}
            </Container>
        </footer>
    );
};

export default Footer;