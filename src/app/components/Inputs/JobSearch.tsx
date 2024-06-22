'use client'

import { TextField, Autocomplete, Slider, Grid, Box, Button } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const JobSearch = ({ cities, categories }: { cities: string[], categories: string[] }) => {
    const router = useRouter();
    const [name, setName] = useState<string | null>(null);
    const [salary, setSalary] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);

    let searchQuery = '';

    if(name){
        searchQuery = searchQuery + `&name=${name}`
    }
    
    if(salary){
        searchQuery = searchQuery + `&salary=${salary}`
    }

    if(category){
        searchQuery = searchQuery + `&category=${category}`
    }

    if(city){
        searchQuery = searchQuery + `&city=${city}`
    }


    return (
        <Box sx={{ backgroundColor: '#e5e5e5', p: '20px', borderRadius: '10px' }}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setName(event.target.value);
                            }}
                            label="Должность"
                            fullWidth
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Autocomplete
                            options={categories}
                            value={category}
                            onChange={(event: any, newValue: any) => {
                                setCategory(newValue);
                              }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    label="Специализация"
                                    variant="standard"
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Autocomplete
                            options={cities}
                            value={city}
                            onChange={(event: any, newValue: any) => {
                                setCity(newValue);
                              }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    label="Город"
                                    variant="standard"
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value={salary}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setSalary(event.target.value);
                            }}
                            label="Уровень дохода"
                            fullWidth
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'grid', alignItems: 'end', justifyItems: 'end' }}>
                        <Button variant='contained' color='error' sx={{width: '100%'}} onClick={() => router.push(`/jobs/list?page=1${searchQuery}`)}>
                            Поиск
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default JobSearch;