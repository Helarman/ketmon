'use client'

import { TextField, Autocomplete, Slider, Grid, Box, Button } from '@mui/material';
import { useState } from 'react';

type AutocompleteType = string | null;

const DocumentsSearch = () => {
    const [textValue, setTextValue] = useState('');
    const [autoCompleteValueOne, setAutoCompleteValueOne] = useState<AutocompleteType>(null);
    const [autoCompleteValueTwo, setAutoCompleteValueTwo] = useState<AutocompleteType>(null);

    const optionsOne = ['Option 1', 'Option 2', 'Option 3']; // Example options for the first Autocomplete
    const optionsTwo = ['Choice 1', 'Choice 2', 'Choice 3']; // Example options for the second Autocomplete

    return (
        <Box sx={{ backgroundColor: '#e5e5e5', p: '20px', borderRadius: '10px' }}>

            <form>
                <Grid container spacing={2} columns={5} display='flex' justifyItems='center' alignItems='center'>
                    <Grid item xs={5} md={1}>
                        <TextField
                        variant="standard"
                            fullWidth
                            label="ФИО"
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={5} md={1}>
                        <Autocomplete
                            fullWidth
                            options={optionsOne}
                            value={autoCompleteValueOne}
                            onChange={(event, newValue) => setAutoCompleteValueOne(newValue)}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Документ" />}
                        />
                    </Grid>
                    <Grid item xs={5} md={1}>
                        <Autocomplete
                            fullWidth
                            options={optionsOne}
                            value={autoCompleteValueOne}
                            onChange={(event, newValue) => setAutoCompleteValueOne(newValue)}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Регион" />}
                        />
                    </Grid >
                    <Grid item xs={5} md={1}>
                        <Autocomplete

                            fullWidth
                            options={optionsTwo}
                            value={autoCompleteValueTwo}
                            onChange={(event, newValue) => setAutoCompleteValueTwo(newValue)}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Город" />}
                        />
                    </Grid>
                    <Grid item xs={5} md={1}>
                        <Button fullWidth variant="contained" type="submit">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    );
};

export default DocumentsSearch;