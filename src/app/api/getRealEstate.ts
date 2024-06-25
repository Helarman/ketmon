
import axios from "axios"

interface IParams {
    slug: string
}

export default async function getRealEstate({ params }: { params: IParams }) {
    try {
        const res = await axios.get(`http://127.0.0.1:1337/api/real-estates?filters[slug][$eqi]=${params.slug}&populate=*`);
        const realEstate = res.data.data[0];

        if (!realEstate) {
            return null;
        }
        return realEstate;
    } catch (error: any) {
       return null;
    }
}