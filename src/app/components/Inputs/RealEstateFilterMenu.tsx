'use client'

import { Button, Box, Autocomplete, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const FilteringMenu = ({ cities }: { cities: string[] }) => {
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
        <Box sx={{ mr: '40px' }}>
            <form>
                <Autocomplete
                    value={city}
                    onChange={(event: any, newValue: any) => {
                        setCity(newValue);
                    }}
                    sx={{ mb: '10px', mt: '10px' }}
                    options={cities}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label="Шаҳар ва вилоят"
                            variant="standard"
                        />
                    }
                />
                <Autocomplete
                    sx={{ mb: '10px'    }}
                    value={type}
                    onChange={(event: any, newValue: any) => {
                        setType(newValue);
                    }}
                    options={['Квартира', 'Хона', 'Уй']}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label="Уй-жой турлари"
                            variant="standard"
                        />
                    }
                />
                <Autocomplete
                    value={rooms}
                    onChange={(event: any, newValue: any) => {
                        setRooms(newValue);
                    }}
                    options={['1', '2', '3', '4', '5']}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label="Хоналар сони"
                            variant="standard"
                        />
                    }
                />
                {/*<TextField
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
                />*/}
                <Box sx={{ mt: '20px', mb: '20px' }}>
                    <Button color='error' variant='contained' sx={{ width: '100%' }} onClick={() => router.push(`/realestates/list?page=1${searchQuery}`)}>
                        ИЗЛАНГ
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default FilteringMenu;