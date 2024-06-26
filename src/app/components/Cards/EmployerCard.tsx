'use client'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { useRouter } from 'next/navigation';

interface EmployerCardProps {
    id: number
    name: string;
    rating: number | null;
    description?: string;
    adress?: string;
    isJob?: boolean;
}
;
const EmployerCard: React.FC<EmployerCardProps> = ({id, name, rating, description, adress, isJob}) => {
    const router = useRouter()
    return (
        <Card onClick={() => router.push(isJob ? `/employers/${id}` : `/landlords/${id}` )} sx={{ cursor: 'pointer'   ,height: '200px', pb: '10px' }}>
            <CardContent>
                <Typography gutterBottom variant="h4">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                     {adress}
                </Typography>

            </CardContent>
            <CardActions sx={{ ml: '10px', display: 'flex', justifyItems: 'center' }}>
                <Rating
                    sx={{ mt: '10px' }}
                    name="custom-rating"
                    value={rating}
                    precision={0.1}
                    readOnly
                />
            </CardActions>
        </Card>
    );
};

export default EmployerCard;