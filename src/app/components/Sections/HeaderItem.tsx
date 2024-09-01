'use client'

import { useRouter } from "next/navigation";

import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { FixedArray } from "@/app/types";
import { Telegram } from "@mui/icons-material";

type ButtonProps = {
    label: string,
    href: string,
}


interface HeaderItemProps {
    title: string;
    subTitle: string;
    buttons: FixedArray<ButtonProps, 2>;
    image: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, subTitle, buttons, image }) => {

    const router = useRouter();
    return (
        <Box sx={{ mb: '70px', display: 'flex', alignItems: 'center' }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: '700', fontSize: { xs: '2rem', sm: '4rem' } }} gutterBottom>
                        <span dangerouslySetInnerHTML={{ __html: title }} />
                    </Typography>
                    <Typography variant="inherit" paragraph>
                        {subTitle}
                    </Typography>
                    <Box sx={{ display: 'flex', mb: '10px' }}>
                        <Box sx={{ mr: '10px' }}>
                            <Button onClick={() => router.push(buttons[0].href)} variant="contained" color='error'>
                                {buttons[0].label}
                            </Button>
                        </Box>
                        <Box sx={{ mr: '10px' }}>
                            <Button color='error' href={buttons[1].href} component='a' variant='outlined'>
                                {buttons[1].label}
                            </Button>
                        </Box>
                        <Box sx={{ mr: '10px' }}>
                            <Button style={{
                                backgroundColor: "#24A1DE",
                            }}
                                href='https://t.me/ketmonishbor'
                                component='a'
                                variant='contained'
                            >
                                <Telegram sx={{mr: '2px', color: '#ffffff' }} />
                                Telegram
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ height: { xs: '', md: '30rem' }, display: 'flex' }}>
                    <img src={`https://excellent-chickens-fb25f11199.strapiapp.com${image}`} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
                </Grid>
            </Grid>
        </Box >
    )
}

export default HeaderItem;