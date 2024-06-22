import { Box, Fab, Typography } from "@mui/material"
import DocumentsSearch from "../components/Inputs/DocumentsSearch";
//import FoundDocumentsTable from "../components/Tables/DocumentsTable";

const JobPage = () => {
    return null;
    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Найденные документы
                </Typography>
                <DocumentsSearch/>
                {/*<FoundDocumentsTable/>*/}
            </Box>
        </>
    )
};

export default JobPage;