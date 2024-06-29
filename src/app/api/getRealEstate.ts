
import axios from "axios"

interface IParams {
    slug: string
}

export default async function getRealEstate({ params }: { params: IParams }) {
    try {
        const res = await axios.get(`https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/real-estates?filters[slug][$eqi]=${params.slug}&populate=*`);
        const realEstate = res.data.data[0];

        if (!realEstate) {
            return null;
        }
        return realEstate;
    } catch (error: any) {
       return null;
    }
}