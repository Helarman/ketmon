'use server'
import axios from "axios";
import { UserProps } from "../types";

export async function addRealEstateToUser({ currentUser, id }: { currentUser: UserProps, id: number }) {

    try {
        await axios.put(
            `https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/users/${currentUser.id}?populate=real_estates`,
            {
                real_estates: {
                    connect: [{ id: id }]
                }

            }
        );
    } catch (error: any) {
        console.log('error')
        return;
    }
}