
import axios from "axios"


export default async function getItems({ searchParams }: { searchParams: any }) {
    let searchQuery = ''

    if (searchParams.city) {
        searchQuery = searchQuery + `filters[city][name][$eqi]=${searchParams.city}&`
    }

    if (searchParams.name) {
        searchQuery = searchQuery + `filters[name][$containsi]=${searchParams.name}&`
    }

    if (searchParams.type) {
        searchQuery = searchQuery + `filters[type][$eqi]=${searchParams.type}&`
    }

    try {
        const res = await axios.get(`https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/items?${searchQuery}populate=*`);

        const data = res.data.data
        if (!data) {
            return null;
        }

        return data;
    } catch (error: any) {
        return null;
    }
}