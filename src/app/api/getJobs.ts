import axios from "axios";

export default async function getJobs({ searchParams }: { searchParams: any }) {
    let currentPage = 1
    let searchQuery = ''

    if(searchParams.page){
        currentPage = searchParams.page
    }
    if(searchParams.city){
        searchQuery = searchQuery + `filters[city][name][$eqi]=${searchParams.city}&`
    }
    
    if(searchParams.salary){
        searchQuery = searchQuery + `filters[minSalary][$gte]=${searchParams.salary}&`
    }
    
    if(searchParams.name){
        searchQuery = searchQuery + `filters[name][$containsi]=${searchParams.name}&`
    }

    if(searchParams.name){
        searchQuery = searchQuery + `filters[name][$containsi]=${searchParams.name}&`
    }

    
    if(searchParams.category){
          searchQuery = searchQuery + `filters[category][name][$eqi]=${searchParams.category}&`
    }

    try {
        const res = await axios.get(`https://excellent-dinosaur-a7b8ad2006.strapiapp.com/api/jobs?pagination[page]=${currentPage}&pagination[pageSize]=5&${searchQuery}populate=*`);
        const jobs = res.data;

        if (!jobs) {
            return null;
        }
        return jobs;
    } catch (error: any) {
       return null;
    }
}