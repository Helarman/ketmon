'use server'
import axios from "axios";
import { UserProps } from "../types";
import toast from "react-hot-toast";

export async function setBalance({ currentUser, value }: { currentUser: UserProps, value: number }) {

    try {
        await axios.put(
            `https://excellent-chickens-fb25f11199.strapiapp.com/api/users/${currentUser.id}`,
            {
                balance: value
            }
        );
    } catch (error: any) {
        console.log('error')
        return;
    }
}