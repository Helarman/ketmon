'use client'
import { Box, Card, CardContent, Container, Grid, Typography, makeStyles } from '@mui/material';
import { FixedArray } from '../types';

const Step = ({ num, text }: { num: number, text: string }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h3" component="h2" color="textSecondary" gutterBottom>
                    {num}
                </Typography>
                <Typography variant="body1" component="p">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

interface StepsProps {
    step1: string;
    step2: string;
    step3: string;
    step4: string
}

const Steps = ({ steps, title, isItem }: { steps: StepsProps, title: string, isItem?: boolean }) => {
    return (
        <Box sx={{ mb: '100px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: '500', mb: '30px' }}>
                {title}
            </Typography>
            <Grid container spacing={2} columns={isItem ? 3: 4}>
                <Grid item xs={isItem ? 3: 4} lg={1}>
                    <Step num={1} text={steps.step1} />
                </Grid>
                <Grid item xs={isItem ? 3: 4} lg={1}>
                    <Step num={2} text={steps.step2} />
                </Grid>
                <Grid item xs={isItem ? 3: 4} lg={1}>
                    <Step num={3} text={steps.step3} />
                </Grid>
                {isItem ? '': <Grid item xs={4} lg={1}>
                    <Step num={4} text={steps.step4} />
                </Grid>}
            </Grid>
        </Box>
    );
}


export default Steps;