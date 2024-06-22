'use client'
import EmployerCard from "@/app/components/Cards/EmployerCard";
import JobDescription from "@/app/components/Cards/JobDescription";
import InfoCard from "@/app/components/Cards/InfoCard";
import Map from "@/app/components/Map/Map";
import { Box, Container, Fab, Grid, Pagination, Typography } from "@mui/material"
import { JobProps, UserProps } from "@/app/types";
import { MapComponent } from "@/app/components/Map/Mapcomponent";
import { useEffect, useState } from "react";

const JobClient = ({ job, isAvailable, currentUser }: { job: JobProps, isAvailable: boolean, currentUser: UserProps }) => {

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;


    let sallary = 'Доход не указан'

    if (!job?.attributes.minSalary) {
        sallary = `до ${job.attributes.maxSalary}₽`
    }

    if (!job.attributes.maxSalary) {
        sallary = `от ${job.attributes.minSalary}₽`
    }

    if (job.attributes.minSalary < job.attributes.maxSalary) {
        sallary = `${job.attributes.minSalary}₽ - ${job.attributes.maxSalary}₽`
    }

    if (job.attributes.minSalary > job.attributes.maxSalary) {
        sallary = `от ${job.attributes.minSalary}₽`
    }

    if (job.attributes.minSalary == job.attributes.maxSalary) {
        sallary = `${job.attributes.minSalary}₽`
    }

    return (
        <>
           
            <Box sx={{ mb: '70px' }}>
                <Grid spacing={2} container>
                    <Grid item xs={12} md={8}>
                        <InfoCard id={job.id} currentUser={currentUser} date={job.attributes.createdAt} title={job.attributes.name} price={job.attributes.price} sallary={sallary} adress={`${job.attributes.city.data.attributes.name},  ${job.attributes.locationName}`} isAvailable={isAvailable} contacts={job.attributes.contacts} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <EmployerCard name={job.attributes.employer.data.attributes.name} rating={job.attributes.employer.data.attributes.rating} description={job.attributes.employer.data.attributes.description} adress={job.attributes.employer.data.attributes.locationName} />
                    </Grid>
                    <Grid item xs={12}>
                        <JobDescription description={job.attributes.description} />
                    </Grid>
                    <Grid item xs={12}>
                        <MapComponent name={job.attributes.locationName} coordinates={job.attributes.locationCoordinates.coordinates} />

                    </Grid>

                </Grid>

            </Box >
        </>
    )
};

export default JobClient;