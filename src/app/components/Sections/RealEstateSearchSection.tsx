import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import RealEstateSearch from '../Inputs/RealEstateSearch';

const RealEstateSearchSection = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: '500'}}>
                Поиск недвижимости
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                <Grid item xs={12} lg={6} order={isSmallScreen ? 2 : 1}>
                    <RealEstateSearch />
                </Grid>
                <Grid item  xs={12} lg={6} order={isSmallScreen ? 1 : 2} sx={{textAlign: 'right'}}>
                    <img src='realestate3.svg' style={{ width: '70%'}} />
                </Grid>
            </Grid>
        </>
    );
};

export default RealEstateSearchSection;