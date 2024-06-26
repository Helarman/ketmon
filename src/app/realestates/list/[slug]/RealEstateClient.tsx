"use client";

import EmployerCard from "@/app/components/Cards/EmployerCard";
import InfoCard from "@/app/components/Cards/InfoCard";
import Map from "@/app/components/Map/Map";

import { Box, Container, Fab, Grid, Pagination, Typography } from "@mui/material"
import Gallery from "@/app/components/Gallery";
import { RealEstateProps, UserProps } from "@/app/types";
import { useEffect, useState } from "react";
import JobDescription from "@/app/components/Cards/JobDescription";


const RealEstateClient = ({ realEstate, isAvailable, currentUser, rating }: { realEstate: RealEstateProps, isAvailable: boolean, currentUser: UserProps, rating: number | null }) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;
    const createdDate = new Date(realEstate.attributes.createdAt).toLocaleDateString()
    const createdTime = new Date(realEstate.attributes.createdAt).toLocaleTimeString().slice(0, -3)

    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>

                </Typography>
                <Grid spacing={2} container>
                    <Grid item xs={12} md={8}>
                        <InfoCard id={realEstate.id} currentUser={currentUser} date={`${createdDate} в ${createdTime}`} title={`${realEstate.attributes.type}, ${realEstate.attributes.size}м², ${realEstate.attributes.rooms} к.`} price={realEstate.attributes.price} sallary={realEstate.attributes.perMonth} adress={`${realEstate.attributes.city.data.attributes.name},  ${realEstate.attributes.locationName}`} isAvailable={isAvailable} contacts={realEstate.attributes.contacts} isJob={false} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <EmployerCard id={realEstate.attributes.landlord.data.id} name={realEstate.attributes.landlord.data.attributes.name} rating={rating} description={realEstate.attributes.landlord.data.attributes.description} adress={realEstate.attributes.landlord.data.attributes.locationName} />
                    </Grid>
                    <Grid item xs={12}>
                        <Gallery images={realEstate.attributes.images}/>
                    </Grid>
                    <Grid item xs={12}>
                        <JobDescription description={realEstate.attributes.description} />
                    </Grid>
                    <Grid item xs={12}>
                        <Map name={realEstate.attributes.locationName} coordinates={realEstate.attributes.locationCoordinates.coordinates} />
                    </Grid>

                </Grid>

            </Box >
        </>
    )
};

export default RealEstateClient;