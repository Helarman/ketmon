"use server";

import EmployerCard from "@/app/components/Cards/EmployerCard";
import InfoCard from "@/app/components/Cards/InfoCard";
import JobDescription from "@/app/components/Cards/JobDescription";
import Map from "@/app/components/Map/Map";

import { Box, Container, Fab, Grid, Pagination, Typography } from "@mui/material"
import Gallery from "@/app/components/Gallery";

const RealEstatePage = () => {

    return null;
    /*
    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>

                </Typography>
                <Grid spacing={2} container>
                    <Grid item xs={12} md={8}>
                        <InfoCard date={"20.05.2024 в 20:08"} title={"Квартира на ул.Пушкина, д.1"} price={123} adress={"Санкт-Петербург"} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <EmployerCard name={'Алексей'} rating={4.5} description="Частный арендодатель" adress="г.Санкт-Петербург" />
                    </Grid>
                    <Grid item xs={12}>

                        <Gallery />
                    </Grid>
                    <Grid item xs={12}>
                        <JobDescription />
                    </Grid>
                    <Grid item xs={12}>
                        <Map />
                    </Grid>

                </Grid>

            </Box >
        </>
    )
        */
};

export default RealEstatePage;