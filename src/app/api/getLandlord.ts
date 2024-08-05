import axios from "axios"

export default async function getLandlord({id} : {id: number}) {
    try {
        const res = await axios.get(`http://31.128.45.168:1337/api/landlords/${id}`);

        const landlord = res.data.data

        return landlord;
    } catch (error: any) {
        return error;
    }
}