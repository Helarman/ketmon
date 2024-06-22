'use client'

import { TextField, Autocomplete, Slider, Grid, Box } from '@mui/material';

import { useState } from 'react';

const ScammerSearch = () => {
    const [textValue, setTextValue] = useState('');
    const [autoCompleteValueOne, setAutoCompleteValueOne] = useState(null);
    const [autoCompleteValueTwo, setAutoCompleteValueTwo] = useState(null);

    const optionsOne = ['Option 1', 'Option 2', 'Option 3']; // Example options for the first Autocomplete
    const optionsTwo = ['Choice 1', 'Choice 2', 'Choice 3']; // Example options for the second Autocomplete
    return null;
    /*return (
        <Box sx={{ backgroundColor: '#e5e5e5', p: '20px', borderRadius: '10px' }}>

            <form>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                        variant="standard"
                            fullWidth
                            label="Мошенник или компания"
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Autocomplete
                            fullWidth
                            options={optionsOne}
                            value={autoCompleteValueOne}
                            onChange={(event, newValue) => setAutoCompleteValueOne(newValue)}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Регион" />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Autocomplete

                            fullWidth
                            options={optionsTwo}
                            value={autoCompleteValueTwo}
                            onChange={(event, newValue) => setAutoCompleteValueTwo(newValue)}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Город" />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <ContainedButton fullWidth variant="contained" type="submit">Submit</ContainedButton>
                    </Grid>
                </Grid>
            </form>
        </Box >
    );*/
};

export default ScammerSearch;