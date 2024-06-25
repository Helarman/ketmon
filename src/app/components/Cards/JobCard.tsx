import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Rating } from '@mui/material';
import { JobProps } from '@/app/types';
import { useRouter } from 'next/navigation';

const JobCard = ({job} : {job: JobProps}) => {
    const router = useRouter()

    let sallary = 'Доход не указан'
    
    if(job.attributes.minSalary < job.attributes.maxSalary){
        sallary = `${job.attributes.minSalary}₽ - ${job.attributes.maxSalary}₽`
    }

    if(job.attributes.minSalary > job.attributes.maxSalary){
        sallary = `от ${job.attributes.minSalary}₽`
    }

    if(job.attributes.minSalary == job.attributes.maxSalary){
        sallary = `${job.attributes.minSalary}₽`
    }

    const createdDate = new Date(job.attributes.createdAt).toLocaleDateString()
    const createdTime = new Date(job.attributes.createdAt).toLocaleTimeString().slice(0,-3)
    return (
        <Card onClick={() => router.push(`/jobs/list/${job.attributes.slug}`)}>
            <CardActionArea >
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {createdDate} в {createdTime}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        {job.attributes.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {sallary}₽
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job.attributes.city.data.attributes.name}, {job.attributes.locationName}
                    </Typography>
                    <Rating
                        sx={{mt: '10px'}}
                        name="custom-rating"
                        value={job.attributes.employer.data.attributes.rating}
                        precision={0.1}
                        readOnly
                    />
                </CardContent>
                <CardActions>
                    <Typography variant="body2" sx={{ color: '#C40C0C', ml: '10px', width: '50%' }}>
                        Откликнуться
                    </Typography>
                </CardActions>

            </CardActionArea>
        </Card>
    );
}

export default JobCard;