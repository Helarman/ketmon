import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';

const RealEstateCard = () => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image="http://localhost:3000/rs.jpg"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        20.05.2024 в 20:08
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        ул.Пушкина, д.1
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        35 000 ₽
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Санкт-Петербург
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
}

export const RealEstateCardHeadline = () => {
    return (
        <Card>
            <CardActionArea>
                <Grid container>
                    <Grid item>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image="http://localhost:3000/rs.jpg"
                        />
                    </Grid>
                    <Grid item>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                20.05.2024 в 20:08
                            </Typography>
                            <Typography gutterBottom variant="h6">
                                ул.Пушкина, д.1
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                35 000 ₽
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Санкт-Петербург
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>

            </CardActionArea>
        </Card >
    );
}

export default RealEstateCard;