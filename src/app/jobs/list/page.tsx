"use server";

import { Box, Button, Typography } from "@mui/material"
import getJobs from "@/app/api/getJobs";
import JobsClient from "./JobsClient";
import getCategories from "@/app/api/getCategories";
import getCities from "@/app/api/getCities";

const JobListPage = async ({ searchParams }: { searchParams: any }) => {
    const jobs = await getJobs({ searchParams });
    const categories = await getCategories()
    const cities = await getCities()
    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Вакансия Рўйхати
                </Typography>
                {jobs ?
                    <JobsClient jobs={jobs.data} pagination={jobs.meta.pagination} cities={cities} categories={categories} />
                    :
                    <>
                        <Typography variant="h4">
                            Ҳеч нарса топилмади
                        </Typography>
                        <Button variant='contained' sx={{ mt: '10px' }} component='a' color='error' href="/jobs/list">
                            Сброс
                        </Button>
                    </>
                }
            </Box >
        </>
    )
};

export default JobListPage;