'use client'

import { useRouter } from "next/navigation";

import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { FixedArray } from "@/app/types";

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
        <Box sx={{ mb: '70px' }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Typography variant="h2" gutterBottom>
                        {title}
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
                        <Box>
                            <Button color='error' onClick={() => router.push(buttons[1].href)} variant="text" disabled>
                                {buttons[1].label}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px', height: '30rem' }} />
                </Grid>
            </Grid>
        </Box >
    )
}

export default HeaderItem;