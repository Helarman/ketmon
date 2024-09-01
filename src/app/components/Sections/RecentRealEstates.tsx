'use client'

import { Box, Container, Grid, Typography } from "@mui/material"
import RealEstateCard from "../Cards/RealEstateCard";
import { RealEstateProps } from "@/app/types";

export const RecentRealEstate = ({ realEstates }: { realEstates: { realEstate: { data: RealEstateProps } }[] }) => {
    return (
        <Box sx={{ mb: '70px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: '500', mb: '30px' }}>
                Топ 5 Уй-жойлари
            </Typography>
            <Grid container spacing={2} columns={5} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>

                {realEstates.map((realEstate) => (

                    <Grid item xs={5} md={5} lg={1} >
                        <RealEstateCard realEstate={realEstate.realEstate.data} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};
