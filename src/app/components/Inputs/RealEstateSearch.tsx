'use client'

import { TextField, Autocomplete, Slider, Grid, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RealEstateSearch = ({ cities }: { cities: string[] }) => {
    const router = useRouter();

    const [city, setCity] = useState<string | null>(null);
    const [type, setType] = useState<string | null>(null);
    const [rooms, setRooms] = useState<string | null>(null);
    const [minPrice, setMinPrice] = useState<string | null>(null);
    const [maxPrice, setMaxPrice] = useState<string | null>(null);

    let searchQuery = '';

    if (type) {
        searchQuery = searchQuery + `&type=${type}`
    }

    if (rooms) {
        searchQuery = searchQuery + `&rooms=${rooms}`
    }

    if (city) {
        searchQuery = searchQuery + `&city=${city}`
    }

    if (minPrice) {
        searchQuery = searchQuery + `&minPrice=${minPrice}`
    }

    if (maxPrice) {
        searchQuery = searchQuery + `&maxPrice=${maxPrice}`
    }

    return (
        <Box sx={{ backgroundColor: '#e5e5e5', p: '20px', borderRadius: '10px' }}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Autocomplete
                            value={city}
                            onChange={(event: any, newValue: any) => {
                                setCity(newValue);
                            }}
                            options={cities}
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
                            value={type}
                            onChange={(event: any, newValue: any) => {
                                setType(newValue);
                            }}
                            options={['Квартира', 'Комната', 'Дом']}
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
                            value={rooms}
                            onChange={(event: any, newValue: any) => {
                                setRooms(newValue);
                            }}
                            options={['1', '2', '3', '4', '5', 'Более']}
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
                            value={minPrice}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setMinPrice(event.target.value);
                            }}
                            type='number'
                            label="Мин.Цена"
                            fullWidth
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            value={maxPrice}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setMaxPrice(event.target.value);
                            }}
                            type='number'
                            label="Макс.Цена"
                            fullWidth
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'grid', alignItems: 'end', justifyItems: 'end' }}>
                        <Button color='error' variant='contained' sx={{ width: '100%' }} onClick={() => router.push(`/realestates/list?page=1${searchQuery}`)}>
                            Поиск
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    );
};

export default RealEstateSearch;