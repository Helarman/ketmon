
'use server'

import axios from "axios";
import { UserProps } from "../types";
import { cookies } from "next/headers";



export default async function getLandlordReviewAilableStatus({ id }: { id: number }) {
    try {
        const res = await axios.get(`https://excellent-chickens-fb25f11199.strapiapp.com/api/users/${id}?populate=*`);

        const items = res.data.items.map((item: any) => item.id);
       
        if (!items) {
           return null;
        }

        if(!id) { return null;}

        return items;

    } catch (error: any) {
        return null;
    }
}