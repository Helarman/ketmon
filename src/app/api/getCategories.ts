import axios from "axios"

interface CategoryProps {
    id: number;
    attributes:{
        name: string
    }
}

export default async function getCategories() {
    try {
        const res = await axios.get(`http://31.128.45.168:1337/api/categories`);
        const categories = res.data.data.map((category: CategoryProps) => category.attributes.name);

        if (!categories) {
            return null;
        }
        return categories;
    } catch (error: any) {
       return null;
    }
}