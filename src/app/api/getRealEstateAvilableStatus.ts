'use server'

import axios from "axios";
import { UserProps } from "../types";
import { cookies } from "next/headers";


interface IParams {
    slug: string
}

interface IUser {
    id: number;
    attributes: UserProps;
}

export default async function getRealEstateAvilableStatus({ params }: { params: IParams }) {
    try {
        const res = await axios.get(`https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/real-estates?filters[slug][$eqi]=${params.slug}&populate=*`);
        const users = res.data.data[0].attributes.users.data.map((user: IUser) => user.attributes.username.toString());
        const username = cookies().get("username")?.value;

        const isAilable = (users.indexOf(username) != -1)

        return isAilable;
    } catch (error: any) {
        return null;
    }
}