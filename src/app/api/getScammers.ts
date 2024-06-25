
import axios from "axios"


export default async function getScammers({ searchParams }: { searchParams: any }) {
    let searchQuery = ''

    if (searchParams.city) {
        searchQuery = searchQuery + `filters[city][name][$eqi]=${searchParams.city}&`
    }

    if (searchParams.name) {
        searchQuery = searchQuery + `filters[name][$containsi]=${searchParams.name}&`
    }

    try {
        const res1 = await axios.get(`https://excellent-dinosaur-a7b8ad2006.strapiapp.com/api/employers?filters[isScammer][$eq]=true&${searchQuery}populate=*`);
        const res2 = await axios.get(`https://excellent-dinosaur-a7b8ad2006.strapiapp.com/api/landlords?filters[isScammer][$eq]=true&${searchQuery}populate=*`);


        const employerScammers = res1.data.data.map((employer: any) => ({ name: employer.attributes.name, type: 'Работодатель', city: employer.attributes.city.data.attributes.name, date: employer.attributes.scammerDate, contacts: employer.attributes.scammerContacts, reason: employer.attributes.scammerReason, proof: employer.attributes.scammerProofs }));
        const landlordsScammers = res2.data.data.map((landlord: any) => ({ name: landlord.attributes.name, type: 'Арендодатель', city: landlord.attributes.city.data.attributes.name, date: landlord.attributes.scammerDate, contacts: landlord.attributes.scammerContacts, reason: landlord.attributes.scammerReason, proof: landlord.attributes.scammerProofs }));

        const exports: { [key: string]: any } = {
            'Работодатель': employerScammers,
            'Арендодатель': landlordsScammers
        }

        const scammers =  searchParams.type ? exports[searchParams.type] : employerScammers.concat(landlordsScammers)

        if (!scammers) {
            return null;
        }

        return scammers;
    } catch (error: any) {
        return null;
    }
}