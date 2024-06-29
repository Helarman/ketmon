import axios from "axios";

export default async function getRealEstateAvilableStatus({ id }: { id: number }) {
    try {
        const res = await axios.get(`https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/reviews?filters[employer][id][$eqi]=${id}&populate=*`);
        const data = res.data.data  

        if(!data) return null;

        return data;
    } catch (error: any) {
        return null;
    }
}