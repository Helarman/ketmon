'use client'

import { Box } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";


interface AnswerProps {
    id: number;
    attributes: {
        question: string;
        answer: string;
    }
}

const HelpClient = ({ data }: { data: AnswerProps[] }) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <Box sx={{ mb: '70px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
                    Помощь
                </Typography>
                <div>
                    {data.map((question) => (
                        <Accordion
                            key={question.id}
                            expanded={expanded === `panel${question.id + 1}`}
                            onChange={handleChange(`panel${question.id + 1}`)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${question.id + 1}bh-content`}
                                id={`panel${question.id + 1}bh-header`}
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {question.attributes.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {question.attributes.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </Box>
        </>
    )
}

export default HelpClient;