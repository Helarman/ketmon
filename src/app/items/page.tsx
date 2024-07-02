import { Box, Fab, Typography } from "@mui/material"
import ItemsSearch from "../components/Inputs/ItemsSearch";
import ItemsTable from "../components/Tables/ItemsTable";
import getCities from "../api/getCities";
import getItems from "../api/getItems";
import { getCurrentUser } from "../api/getCurrentUser";
import getItemsByUser from "../api/getItemsByUser";

const ItemsPage = async ({ searchParams }: { searchParams: any }) => {

    const cities = await getCities()
    const items = await getItems({ searchParams })
    const currentUser = await getCurrentUser()
    const avilableItemsIds = await getItemsByUser({ id: currentUser?.id })


    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    УЙ-ЖОЙ ТОПИШ
                </Typography>
                <ItemsSearch cities={cities} />
                <ItemsTable items={items} currentUser={currentUser} avilableItemsIds={avilableItemsIds} />
            </Box>
        </>
    )
};

export default ItemsPage;