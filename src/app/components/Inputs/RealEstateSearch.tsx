'use client'

import { TextField, Autocomplete, Slider, Grid, Box, Button } from '@mui/material';
import { useState } from 'react';
const RealEstateSearch = () => {
    return null;
    return (
        <Box sx={{ backgroundColor: '#e5e5e5', p: '20px', borderRadius: '10px' }}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Autocomplete
                            multiple
                            options={['Option 1', 'Option 2', 'Option 3']}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    label="Город"
                                    variant="standard"
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Autocomplete
                            multiple
                            options={['Option 1', 'Option 2', 'Option 3']}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    label="Тип недвижимости"
                                    variant="standard"
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Autocomplete
                            multiple
                            options={['Студия', '1', '2', '3', '4', '5', 'Более']}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    label="Колиичество комнат"
                                    variant="standard"
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            type='number'
                            label="Мин.Цена"
                            fullWidth
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            type='number'
                            label="Макс.Цена"
                            fullWidth
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'grid', alignItems: 'end', justifyItems: 'end' }}>
                        <Button type="submit">
                            Поиск
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    );
};

export default RealEstateSearch;