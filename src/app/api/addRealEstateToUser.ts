'use server'
import axios from "axios";
import { UserProps } from "../types";

export async function addRealEstateToUser({ currentUser, id }: { currentUser: UserProps, id: number }) {

    try {
        await axios.put(
            `http://31.128.45.168:1337/api/users/${currentUser.id}?populate=real_estates`,
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