'use server'
import axios from "axios";
import { UserProps } from "../types";
import toast from "react-hot-toast";

export async function setBalance({ currentUser, value }: { currentUser: UserProps, value: number }) {

    try {
        await axios.put(
            `https://committed-life-48566f99cd.strapiapp.com/api/users/${currentUser.id}`,
            {
                balance: value
            }
        );
    } catch (error: any) {
        console.log('error')
        return;
    }
}