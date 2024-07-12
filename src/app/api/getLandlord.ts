import axios from "axios"

export default async function getLandlord({id} : {id: number}) {
    try {
        const res = await axios.get(`https://committed-life-48566f99cd.strapiapp.com/api/landlords/${id}`);

        const landlord = res.data.data

        return landlord;
    } catch (error: any) {
        return error;
    }
}