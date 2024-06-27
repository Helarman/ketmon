import { Box, Fab, Typography } from "@mui/material"
import ItemsSearch from "../components/Inputs/ItemsSearch";
import ItemsTable from "../components/Tables/ItemsTable";
import getCities from "../api/getCities";
import getItems from "../api/getItems";

const ItemsPage = async ({ searchParams }: { searchParams: any }) => {
    
    const cities = await getCities()
    const items = await getItems({searchParams})
    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Раздел в разработке
                </Typography>
                <ItemsSearch cities={cities}/>
                <ItemsTable items={items}/>
            </Box>
        </>
    )
};

export default ItemsPage;