import { Box, Container, Fab, Typography } from "@mui/material"

import JobSearch from "../components/Inputs/JobSearch";
import Categories from "../components/Sections/Categories";
import { RecentJob } from '../components/Sections/RecentJob';
import getCategories from "../api/getCategories";
import getCities from "../api/getCities";





const JobPage = async () => {
    const categories = await getCategories()
    const cities = await getCities()
    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Иш қидириш
                </Typography>
                <JobSearch cities={cities} categories={categories} />
            </Box>
            {
                //<RecentJob />
            }
            <Categories title={'Буш иш ўринлари'} categories={categories} />

        </>
    )
};

export default JobPage;