
'use server'

import axios from "axios";
import { UserProps } from "../types";
import { cookies } from "next/headers";


interface IUser {
    id: number;
    attributes: UserProps;
}

export const fixTinaResults = <T>(data: T): T => {
    try {
        const serializedData = JSON.stringify(data);
        return JSON.parse(serializedData) as T;
    } catch (error) {
        console.error("Error in serializing/deserializing data:", error);
        throw new Error("Handling data failed");
    }
};

export default async function getEmployerReviewAilavleStatus({ id }: { id: number }) {
    try {
        const res = await axios.get(`https://excellent-dinosaur-a7b8ad2006.strapiapp.com/api/reviews?filters[employer][id][$eqi]=${id}&populate=users_permissions_user`);

        const users = res.data.data.map((review: any) => review.attributes.users_permissions_user.data.attributes.username.toString())
       
        const username = cookies().get("username")?.value;

        const isAilable = fixTinaResults(users.indexOf(username) != -1)

        if (!users) {
           return null;
        }

        return isAilable;

    } catch (error: any) {
        return null;
    }
}