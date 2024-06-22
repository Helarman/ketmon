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
export const fixTinaResults = <T>(data: T): T => {
    try {
        const serializedData = JSON.stringify(data);
        return JSON.parse(serializedData) as T;
    } catch (error) {
        console.error("Error in serializing/deserializing data:", error);
        throw new Error("Handling data failed");
    }
};

export default async function getvAilableStatus({ params }: { params: IParams }) {
    try {
        const res = await axios.get(`http://127.0.0.1:1337/api/jobs?filters[slug][$eqi]=${params.slug}&populate=users`);

        const data = res

        const users = data.data.data[0].attributes.users.data.map((user: IUser) => user.attributes.username.toString());
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