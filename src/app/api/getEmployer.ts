import axios from "axios"

export default async function getEmployer({id} : {id: number}) {
    try {
        const res = await axios.get(`http://31.128.45.168:1337/api/employers/${id}`);

        const employer = res.data.data

        return employer;
    } catch (error: any) {
        return error;
    }
}