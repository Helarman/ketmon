'use server'
import axios from "axios";

export async function postLandlordReviews({ rating, text, id }: { rating: number, text: string, id: number }) {
    const { cookies } = await import("next/headers");
    const username = cookies().get("username")?.value;
    if (!username) {
        return null;
    }

    try {
        const response = await axios.get(`http://31.128.45.168:1337/api/users?filters[username][$eq]=${username}`);
        const currentUser = response.data[0];

        await axios.post(
            `http://31.128.45.168:1337/api/reviews?populate=*`,
            {
                "data": {
                    publishedAt: null,
                    text: text,
                    rating: rating,
                    users_permissions_user: {
                        id: currentUser.id

                    },
                    landlord: {
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