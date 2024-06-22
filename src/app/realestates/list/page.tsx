"use server";

import RealEstateDisplaySetting from "@/app/components/Inputs/RealEstateDisplaySetting";
import FilteringMenu from "@/app/components/Inputs/RealEstateFilterMenu";
import {RealEstateCardHeadline} from "@/app/components/Cards/RealEstateCard";
import { Box, Container, Fab, Grid, Pagination, Typography } from "@mui/material"

const JobListPage = () => {

    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Список объявлений
                </Typography>
                <RealEstateDisplaySetting/>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <FilteringMenu />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box sx={{ mb: '1rem' }}>
                            <RealEstateCardHeadline />
                        </Box>
                        <Box sx={{ mb: '1rem' }}>
                            <RealEstateCardHeadline />
                        </Box>
                        <Box sx={{ mb: '1rem' }}>
                            <RealEstateCardHeadline />
                        </Box>
                        <Box sx={{ mb: '1rem' }}>
                            <RealEstateCardHeadline />
                        </Box>
                        <Box sx={{ mb: '1rem' }}>
                            <RealEstateCardHeadline />
                        </Box>
                        <Box sx={{ mb: '1rem' }}>
                            <RealEstateCardHeadline />
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Pagination count={10} size="large" />
                        </Box>

                    </Grid>

                </Grid>
            </Box >
        </>
    )
};

export default JobListPage;