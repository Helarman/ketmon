'use client'

import { TextField, Autocomplete, Slider, Grid, Box, Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

import { useState } from 'react';

const ScammerSearch = ({ cities }: { cities: string[] }) => {
    const searchParams = useSearchParams()
    const router = useRouter();
    
    const [name, setName] = useState<string | null>(searchParams.get('name'));
    const [type, setType] = useState<string | null>(searchParams.get('type'));
    const [city, setCity] = useState<string | null>(searchParams.get('city'));

    const types = ['Работодатель', 'Арендодатель']; 
    let searchQuery = '';

    if (name) {
        searchQuery = searchQuery + `name=${name}&`
    }

    if (type) {
        searchQuery = searchQuery + `type=${type}&`
    }

    if (city) {
        searchQuery = searchQuery + `city=${city}&`
    }

    searchQuery = searchQuery.slice(0, -1)

    return (
        <Box sx={{ backgroundColor: '#e5e5e5', p: '20px', borderRadius: '10px' }}>
            <form>
                <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={3}>
                        <TextField
                            variant="standard"
                            fullWidth
                            label="Фирибгарлик тури"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Autocomplete
                            fullWidth
                            options={types}
                            value={type}
                            onChange={(event, newValue) => setType(newValue)}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Фаолият тури" />}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Autocomplete

                            fullWidth
                            options={cities}
                            value={city}
                            onChange={(event, newValue) => setCity(newValue)}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Шаҳар ва вилоят" />}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button fullWidth variant="contained" color='error' onClick={() => router.push(`/scammers?${searchQuery}`)}>ИЗЛАНГ</Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    );
};

export default ScammerSearch;