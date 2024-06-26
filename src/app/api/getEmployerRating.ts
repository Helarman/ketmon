
'use server'

import axios from "axios";
import { ReviewProps, UserProps } from "../types";
import { cookies } from "next/headers";


export const fixTinaResults = <T>(data: T): T => {
    try {
        const serializedData = JSON.stringify(data);
        return JSON.parse(serializedData) as T;
    } catch (error) {
        console.error("Error in serializing/deserializing data:", error);
        throw new Error("Handling data failed");
    }
};

export default async function getEmployerRating({ id }: { id: number }) {
    try {
        const res = await axios.get(`https://excellent-dinosaur-a7b8ad2006.strapiapp.com/api/reviews?filters[employer][id][$eqi]=${id}&populate=*`);
        //.data.map((review: any) => review.attributes.users_permissions_user.data.attributes.username.toString())
        const ratings = res.data.data.map((review: ReviewProps) => review.attributes.rating)
       
        const rating = Number((ratings.reduce((partial_sum: number, a: number) => partial_sum + a, 0) / ratings.length).toFixed(1))

        if (!rating) {
           return null;
        }

        return rating;

    } catch (error: any) {
        return null;
    }
}