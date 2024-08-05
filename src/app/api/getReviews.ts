import axios from "axios";

export default async function getRealEstateAvilableStatus({ id }: { id: number }) {
    try {
        const res = await axios.get(`http://31.128.45.168:1337/api/reviews?filters[employer][id][$eqi]=${id}&populate=*`);
        const data = res.data.data  

        if(!data) return null;

        return data;
    } catch (error: any) {
        return null;
    }
}