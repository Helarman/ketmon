import axios from "axios"

export default async function getHomePageData() {
    try {
        const res = await axios.get(`https://committed-life-48566f99cd.strapiapp.com/api/home-page?populate=deep`);
        
        const data = res.data

        if (!data) {
            return null;
        }
        return data.data.attributes;
    } catch (error: any) {
       return null;
    }
}