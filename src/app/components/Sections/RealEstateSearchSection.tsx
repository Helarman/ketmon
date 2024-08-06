import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import RealEstateSearch from '../Inputs/RealEstateSearch';
import { ImageProps } from '@/app/types';

const RealEstateSearchSection = ({ cities, image }: { cities: string[], image: ImageProps }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box sx={{ mb: '70px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                Уй-жой қидириш
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                <Grid item xs={12} lg={6} order={isSmallScreen ? 2 : 1}>
                    <RealEstateSearch cities={cities} />
                </Grid>
                <Grid item xs={12} lg={6} order={isSmallScreen ? 1 : 2} sx={{ textAlign: 'right' }}>
                    <img src={`http://31.128.45.168:1337${image.data.attributes.url}`} style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default RealEstateSearchSection;