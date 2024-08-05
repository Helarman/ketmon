import axios from "axios"

export default async function getHomePageData() {
    try {
        const res = await axios.get(`http://31.128.45.168:1337/api/home-page?populate=deep`);
        
        const data = res.data

        if (!data) {
            return null;
        }
        return data.data.attributes;
    } catch (error: any) {
       return null;
    }
}