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
                        {<img src="https://dazzling-symphony-5fc97c5a00.media.strapiapp.com/logo_de5e3d5f8b.png" style={{ height: '5rem', marginBottom: '1rem' }} alt="" />}
                        <Box>
                            <IconButton color="inherit" component='a' href="https://www.youtube.com/@ucharketmon">
                                <YouTube fontSize='large' style={{ color: '#FF0000' }} />
                            </IconButton>
                            <IconButton color="inherit" component='a' href="https://t.me/hurmacha1">
                                <Telegram fontSize='large' style={{ color: '#0088cc' }} />
                            </IconButton>
                            <IconButton color="inherit" component='a' href='https://www.instagram.com/ucharketmon1?utm_source=qr&igsh=MTR5YXNmZWExeTd3Yg=='>
                                <Instagram fontSize='large' style={{color: '#d6249f'}} sx={{ color: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)' }} />
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