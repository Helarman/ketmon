'use server'
import axios from "axios";
import { UserProps } from "../types";

export async function addJobToUser({ currentUser, id }: { currentUser: UserProps, id: number }) {

    try {
        await axios.put(
            `http://127.0.0.1:1337/api/users/${currentUser.id}?populate=jobs`,
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