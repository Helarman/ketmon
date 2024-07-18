"use client";

import RealEstateCard from "@/app/components/Cards/RealEstateCard";
import RealEstateDisplaySetting from "@/app/components/Inputs/RealEstateDisplaySetting";
import FilteringMenu from "@/app/components/Inputs/RealEstateFilterMenu";
import { PaginationProps, RealEstateProps } from "@/app/types";
import { Box, Container, Fab, Grid, Pagination, Typography } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const RealEstateClient = ({ cities, realEstates, pagination }: { cities: string[], pagination: PaginationProps, realEstates: RealEstateProps[] }) => {
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
    }
    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Шаҳар ва вилоят
                </Typography>
                <RealEstateDisplaySetting />
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <FilteringMenu cities={cities} />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={2} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                            {realEstates ?
                                realEstates.map((realEstate) => (
                                    <Grid item xs={12} md={6} lg={4} >
                                        <RealEstateCard realEstate={realEstate} />
                                    </Grid>
                                ))
                                :
                                <Typography variant="h3">
                                   Ҳеч нарса топилмади
                                </Typography>
                            }
                        </Grid>

                        {pagination.pageCount > 1 ?
                            < Box
                                sx={{ mt: '20px' }}
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

                </Grid>
            </Box >
        </>
    )
};

export default RealEstateClient;