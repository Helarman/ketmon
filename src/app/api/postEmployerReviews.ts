'use server'
import axios from "axios";

export async function postEmployerReviews({ rating, text, id }: { rating: number, text: string, id: number }) {
    const { cookies } = await import("next/headers");
    const username = cookies().get("username")?.value;
    if (!username) {
        return null;
    }

    try {
        const response = await axios.get(`https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/users?filters[username][$eq]=${username}`);
        const currentUser = response.data[0];

        await axios.post(
            `https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/reviews?populate=*`,
            {
                "data": {
                    publishedAt: null,
                    text: text,
                    rating: rating,
                    users_permissions_user: {
                        id: currentUser.id

                    },
                    employer: {
                        id: id

                    }
                },
            }
        );
        console.log(rating)
        return;
    } catch (error: any) {
        console.log(error)
        return;
    }
}