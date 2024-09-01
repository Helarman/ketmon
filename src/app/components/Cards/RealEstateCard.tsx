'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import { RealEstateProps } from '@/app/types';
import { useRouter } from 'next/navigation';

const RealEstateCard = ({ realEstate }: { realEstate: RealEstateProps }) => {
    const router = useRouter()
    const createdDate = new Date(realEstate.attributes.createdAt).toLocaleDateString()
    const createdTime = new Date(realEstate.attributes.createdAt).toLocaleTimeString().slice(0, -3)

    return (
        <Card onClick={() => router.push(`/realestates/list/${realEstate.attributes.slug}`)}>
            <CardActionArea>
                {realEstate.attributes.images && realEstate.attributes.images.data &&
                    <CardMedia
                        component="img"
                        alt="Фото недвижимости"
                        height="200"
                        image={`https://excellent-chickens-fb25f11199.strapiapp.com${realEstate.attributes.images.data[0].attributes.url}`}
                    />

                }
                  {!realEstate.attributes.images.data  &&

                    <CardMedia
                        component="img"
                        alt="Фото недвижимости"
                        height="200"
                        image={`https://place-hold.it/800x400`}
                    />

                }
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {createdDate} в {createdTime}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        {realEstate.attributes.type}, {realEstate.attributes.size}м², {realEstate.attributes.rooms} комнат
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {realEstate.attributes.perMonth}₽
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {realEstate.attributes.locationName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography variant="body2" sx={{ color: '#C40C0C', ml: '10px', width: '50%' }}>
                        Подробнее
                    </Typography>
                </CardActions>

            </CardActionArea>
        </Card>
    );
};



export default RealEstateCard;
