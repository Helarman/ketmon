'use client'

import { postLandlordReviews } from "@/app/api/postLandlordReviews";
import { EmployerProps, ReviewProps, UserProps } from "@/app/types";
import { Box, Button, Card, CardActions, CardContent, Rating, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation"
import { useState } from "react";
import toast from "react-hot-toast";

const LandlordClient = ({ currentUser,landlord, reviews, isAilable, rating }: {currentUser: UserProps, landlord: EmployerProps, reviews: ReviewProps[], isAilable: boolean | null, rating: number | null}) => {
    const router = useRouter()
    const [value, setValue] = useState<number | null>(0);
    const [text, setText] = useState<string | null>(null);

    async function submitReview() {
        if (!value) {
            toast.error('Поставьте оценку!')
            return null;
        }
        if (!text) {
            toast.error('Напишите отзыв!')
            return null;
        }

        await postLandlordReviews({ text: text, rating: value, id: landlord.id })
        toast.success('Отзыв успешно добавлен')
        window.location.reload();
    }

    return (
        <>
            <Card sx={{ height: '200px', pb: '10px', mb: '20px' }}>

                <CardContent>
                    <Typography gutterBottom variant="h4">
                        {landlord.attributes.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {landlord.attributes.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {landlord.attributes.locationName}
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

            {isAilable || !currentUser ? null : <Card sx={{ p: '10px', mb: '20px' }}>
                <Typography gutterBottom variant="h4">
                    Оставьте отзыв и помогите другим
                </Typography>
                <form>
                    <Rating
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{ mt: '10px' }}
                        name="custom-rating"
                        precision={1}
                    />
                    <TextField
                        value={text}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setText(event.target.value);
                        }}
                        type='string'
                        label="Ваш отзыв"
                        fullWidth
                        variant="filled"
                        minRows={6}
                        multiline={true}
                        margin="normal"
                    />
                    <Button variant='contained' sx={{ mt: '10px', ml: { sm: 0, md: '75%' }, width: { sm: '100%', md: '25%' } }} color='error' onClick={submitReview}>
                        Отправить
                    </Button>
                </form>
            </Card>}

            <Card sx={{ p: '10px', mb: '20px' }}>
                <Typography gutterBottom variant="h4">
                    Отзывы
                </Typography>
                {reviews && reviews.map((review) => (
                    <Box key={review.id}

                        sx={{ my: 2, display: 'block' }}

                    >
                        <Box sx={{ width: '100%', display: 'flex', justifyItems: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ mr: '5px' }}>от</Typography>
                            <Typography variant='h6'>
                                {review.attributes.users_permissions_user.data.attributes.username}
                            </Typography>
                            <Typography>, {new Date(review.attributes.createdAt).toLocaleDateString()} в {new Date(review.attributes.createdAt).toLocaleTimeString().slice(0, -3)}
                            </Typography>
                        </Box>
                        <Rating
                            value={review.attributes.rating}
                            sx={{ my: '10px' }}
                            name="custom-rating"
                            precision={0.1}
                            readOnly
                        />
                        <Typography>
                            {review.attributes.text}
                        </Typography>
                    </Box>
                ))

                }
                {!reviews || reviews.length == 0 && <Typography variant='h6'>Отзывы не найдены</Typography>}
            </Card>
        </>
    )
}

export default LandlordClient;