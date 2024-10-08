import axios from "axios";

export default async function getLandlordsReviews({ id }: { id: number }) {
    try {
        const res = await axios.get(`https://excellent-chickens-fb25f11199.strapiapp.com/api/reviews?filters[landlord][id][$eqi]=${id}&populate=*`);
        const data = res.data.data  

        if(!data) return null;

        return data;
    } catch (error: any) {
        return null;
    }
}