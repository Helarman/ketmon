'use client'

import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/navigation';


const Categories = ({categories, title, isRealEstate} : {title: string, categories: string[], isRealEstate?: boolean}) => {
    const classes = useStyles();
    const router = useRouter()
    return (
        <Box sx={{my: '70px'}}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: '500' }}>
               {title}
            </Typography>
            <Grid container>
                {categories.map((category, index) => (
                    <Grid item lg={6} sm={12} key={index}>
                        <Button onClick={() => router.push(`${isRealEstate ? '/realestates/list?page=1&city=' : '/jobs/list?page=1&category='}${category}`)} className={classes.categoryButton}>{category}</Button>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};


const useStyles = makeStyles(() => ({
    categoryButton: {
      color: 'black', 
      fontSize: '1.2rem',
      textTransform: 'none', 
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        opacity: '0.7', 
      },
    },
  }));
  

export default Categories;