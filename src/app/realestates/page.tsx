import { Box, Container, Fab, Typography } from "@mui/material"

import Categories from "../components/Sections/Categories";
import { RecentJob } from '../components/Sections/RecentJob';
import { RecentRealEstate } from "../components/Sections/RecentRealEstates";
import RealEstateSearch from "../components/Inputs/RealEstateSearch";
import getHomePageData from "../api/getHomePageData";
import getCities from "../api/getCities";


const RealEstatePage = async () => {
    const data = await getHomePageData();
    const cities = await getCities()

    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Уй-жой қидириш
                </Typography>
                <RealEstateSearch cities={cities} />
            </Box>
            <Categories title={'Шаҳар ва вилоят'} categories={cities} isRealEstate />
        </>
    )
};

export default RealEstatePage;