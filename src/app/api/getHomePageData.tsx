import axios from "axios"

export default async function getHomePageData() {
    try {
        const res = await axios.get(`http://127.0.0.1:1337/api/home-page?populate=deep`);
        
        const data = res.data

        if (!data) {
            return null;
        }
        return data.data.attributes;
    } catch (error: any) {
       return null;
    }
}