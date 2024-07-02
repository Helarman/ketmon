'use client'

import { TextField, Autocomplete, Slider, Grid, Box, Button } from '@mui/material';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ItemsSearch = ({ cities }: { cities: string[] }) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [name, setName] = useState(searchParams.get('name'));
    const [type, setType] = useState<string | null>(searchParams.get('type'));
    const [city, setCity] = useState<string | null>(searchParams.get('city'));

    const types = ['Ҳужжатлар', 'Шахсий буюмлар ', 'Топилган '];

    let searchQuery = '';

    if (name) {
        searchQuery = searchQuery + `name=${name}&`
    }

    if (type) {
        let ruType='';
        if( type == 'Ҳужжатлар') { ruType = 'Документ'}
        if( type == 'Шахсий буюмлар') { ruType = 'Личная вещь'}
        if( type == 'Шахсий буюмлар') { ruType = 'Человек'}

        searchQuery = searchQuery + `type=${ruType}&`
    }

    if (city) {
        searchQuery = searchQuery + `city=${city}&`
    }

    searchQuery = searchQuery.slice(0, -1)


    return (
        <Box sx={{ backgroundColor: '#e5e5e5', p: '20px', borderRadius: '10px' }}>
            <form>
                <Grid container spacing={2} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={3}>
                        <TextField
                            variant="standard"
                            fullWidth
                            label="ФИО"
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
                            renderInput={(params) => <TextField {...params} variant="standard" label="Топилган " />}
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
                        <Button fullWidth variant="contained" type="submit" color='error'  onClick={() => router.push(`/items?${searchQuery}`)}>ИЗЛАНГ</Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    );
};

export default ItemsSearch;