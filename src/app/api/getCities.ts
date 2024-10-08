import axios from "axios"

interface CityProps {
    id: number;
    attributes:{
        name: string
    }
}

export default async function getCities() {
    try {
        const res = await axios.get(`https://excellent-chickens-fb25f11199.strapiapp.com/api/cities`);
        const categories = res.data.data.map((city: CityProps) => city.attributes.name);

        if (!categories) {
            return null;
        }
        return categories;
    } catch (error: any) {
       return null;
    }
}