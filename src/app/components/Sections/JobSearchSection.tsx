import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import JobSearch from '../Inputs/JobSearch';
import { ImageProps } from '@/app/types';

const JobSearchSection = ({cities, categories, image} : {cities: string[], categories: string[], image: ImageProps}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: '500'}}>
                Поиск вакансий
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                <Grid item xs={12} lg={6} order={isSmallScreen ? 2 : 1}>
                    <JobSearch categories={categories} cities={cities}/>
                </Grid>
                <Grid item xs={12} lg={6} order={isSmallScreen ? 1 : 2}>
                    <img src={image.data.attributes.url} style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </>
    );
};

export default JobSearchSection;