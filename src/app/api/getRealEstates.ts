import axios from "axios";

export default async function getRealEstates({ searchParams }: { searchParams: any }) {
    let currentPage = 1
    let searchQuery = ''

    if(searchParams.page){
        currentPage = searchParams.page
    }
    if(searchParams.city){
        searchQuery = searchQuery + `filters[city][name][$eqi]=${searchParams.city}&`
    }
    
    if(searchParams.minPrice){
        searchQuery = searchQuery + `filters[perMonth][$gte]=${searchParams.minPrice}&`
    }

    if(searchParams.maxPrice){
        searchQuery = searchQuery + `filters[perMonth][$lte]=${searchParams.maxPrice}&`
    }
    
    if(searchParams.type){
        searchQuery = searchQuery + `filters[type][$containsi]=${searchParams.type}&`
    }
    
    if(searchParams.rooms){
          searchQuery = searchQuery + `filters[category][name][$eqi]=${searchParams.rooms}&`
    }

    try {
        const res = await axios.get(`http://127.0.0.1:1337/api/real-estates?pagination[page]=${currentPage}&pagination[pageSize]=18&${searchQuery}populate=*`);
        const realEstates = res.data;

        if (!realEstates) {
            return null;
        }
        return realEstates;

    } catch (error: any) {
       return null;
    }
}