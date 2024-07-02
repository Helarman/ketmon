'use client'

import { Box, Container, Grid, Typography } from "@mui/material"
import JobCard from "../Cards/JobCard"
import { JobProps } from "@/app/types";

export const RecentJob = ({ jobs }: { jobs: { job: { data: JobProps } }[] }) => {
    return (
        <Box sx={{ mb: '70px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: '500', mb: '30px' }}>
                Иш қидириш
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                {jobs.map((job) => (
                    <Grid item xs={12} md={6} lg={3} >
                        <JobCard job={job.job.data} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};
