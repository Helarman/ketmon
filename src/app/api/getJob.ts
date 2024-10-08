import axios from "axios"

interface IParams {
    slug: string
}

export default async function getJob({ params }: { params: IParams }) {
    try {
        const res = await axios.get(`https://excellent-chickens-fb25f11199.strapiapp.com/api/jobs?filters[slug][$eqi]=${params.slug}&populate=*`);
        const job = res.data.data[0];

        if (!job) {
            return null;
        }
        return job;
    } catch (error: any) {
       return null;
    }
}