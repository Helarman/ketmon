import { Box, Fab, Typography } from "@mui/material"
import ScammerSearch from "../components/Inputs/ScammerSearch";
//import FraudTable from "../components/Tables/ScammersTable";

const JobPage = () => {
    return null;
    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Список мошенников
                </Typography>
                <ScammerSearch />
                {/*<FraudTable/>*/}
            </Box>
        </>
    )
};

export default JobPage;