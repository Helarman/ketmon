'use client'

import { Select, MenuItem, TextField, Slider, FormControl, InputLabel, Grid, Button, Box, Autocomplete } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const FilteringMenu = ({ cities, categories }: { cities: string[], categories: string[] }) => {
    const searchParams = useSearchParams()
    const router = useRouter();

    const [name, setName] = useState<string | null>(searchParams.get('name'));
    const [salary, setSalary] = useState<string | null>(searchParams.get('salary'));
    const [category, setCategory] = useState<string | null>(searchParams.get('category'));
    const [city, setCity] = useState<string | null>(searchParams.get('city'));

    let searchQuery = '';

    if (name) {
        searchQuery = searchQuery + `&name=${name}`
    }

    if (salary) {
        searchQuery = searchQuery + `&salary=${salary}`
    }

    if (category) {
        searchQuery = searchQuery + `&category=${category}`
    }

    if (city) {
        searchQuery = searchQuery + `&city=${city}`
    }


    return (
        <Box sx={{ mr: '40px' }}>
            <form>
                {/*<TextField
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName(event.target.value);
                    }}
                    sx={{ mt: '0', mb: '0' }}
                    label="Должность"
                    fullWidth
                    variant="standard"
                    margin="normal"
                />*/}
                <Autocomplete
                    value={category}
                    onChange={(event: any, newValue: any) => {
                        setCategory(newValue);
                    }}
                    sx={{ mt: '10px' }}
                    options={categories}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label="Буш иш ўринлари"
                            variant="standard"
                        />
                    }
                />
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

                {/*<TextField
                    value={salary}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSalary(event.target.value);
                    }}
                    sx={{ mt: '0' }}
                    label="Уровень дохода"
                    fullWidth
                    variant="standard"
                    margin="normal"
                />*/}
                <Box sx={{ mt: '20px', mb: '20px' }}>
                    <Button variant='contained' sx={{ width: '100%' }} color='error' onClick={() => router.push(`/jobs/list?page=1${searchQuery}`)}>
                        ИЗЛАНГ
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default FilteringMenu;