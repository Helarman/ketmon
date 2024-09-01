import axios from "axios"

interface CategoryProps {
    id: number;
    attributes:{
        name: string
    }
}

export default async function getCategories() {
    try {
        const res = await axios.get(`https://excellent-chickens-fb25f11199.strapiapp.com/api/categories`);
        const categories = res.data.data.map((category: CategoryProps) => category.attributes.name);

        if (!categories) {
            return null;
        }
        return categories;
    } catch (error: any) {
       return null;
    }
}