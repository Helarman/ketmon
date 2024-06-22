'use client'
import FilteringMenu from "@/app/components/Inputs/FilterMenu";
import JobCard from "@/app/components/Cards/JobCard";
import JobDisplaySettings from "@/app/components/Inputs/JobDisplaySetting";
import { JobProps, PaginationProps } from "@/app/types";
import { Box, Container, Fab, Grid, Pagination, Typography } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const JobsClient = ({ jobs, pagination, categories, cities }: { jobs: JobProps[], pagination: PaginationProps, cities: string[], categories: string[] }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [page, setPage] = useState(1);
    useEffect(() => {
        const currentPage = Number(searchParams.get('page'))
        setPage(currentPage)
    }, [page, setPage]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        router.push(`${pathname}?page=${value}`);
    };
    return (
        <>
            <JobDisplaySettings />
            <Grid container>
                <Grid item xs={12} md={3}>
                    <FilteringMenu cities={cities} categories={categories} />
                </Grid>
                <Grid item xs={12} md={9}>
                    {jobs ?
                        jobs.map((job) => (
                            <Box key={job.id} sx={{ mb: '1rem' }}>
                                <JobCard job={job} />
                            </Box>
                        ))
                        :
                        <Typography variant="h3">
                            Ничего не найдено
                        </Typography>
                    }

                    {pagination.pageCount > 1 ?
                        < Box

                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {page}
                            <Pagination count={pagination.pageCount} size="large" page={page} onChange={handlePageChange} />
                        </Box>
                        :
                        null
                    }



                </Grid>

            </Grid ></>
    )
}

export default JobsClient;