import { Box, Fab, Typography } from "@mui/material"
import ScammerSearch from "../components/Inputs/ScammerSearch";
import FraudTable from "../components/Tables/ScammersTable";
import getCities from "../api/getCities";
import getScammers from "../api/getScammers";

const JobPage = async ({ searchParams }: { searchParams: any }) => {
    const cities = await getCities()
    const scammers = await getScammers({ searchParams })

    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    ФИРИБГАРЛАР
                </Typography>
                <ScammerSearch cities={cities} />
                <FraudTable scammers={scammers} />

            </Box>
        </>
    )
};

export default JobPage;