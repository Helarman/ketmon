'use server'
import axios from "axios";
import { UserProps } from "../types";

export async function addJobToUser({ currentUser, id }: { currentUser: UserProps, id: number }) {

    try {
        await axios.put(
            `https://excellent-chickens-fb25f11199.strapiapp.com/api/users/${currentUser.id}?populate=jobs`,
            {
                jobs: {
                    connect: [{ id: id }]
                }

            }
        );
    } catch (error: any) {
        console.log('error')
        return;
    }
}