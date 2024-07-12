import axios from "axios"

export default async function getEmployer({id} : {id: number}) {
    try {
        const res = await axios.get(`https://committed-life-48566f99cd.strapiapp.com/api/employers/${id}`);

        const employer = res.data.data

        return employer;
    } catch (error: any) {
        return error;
    }
}