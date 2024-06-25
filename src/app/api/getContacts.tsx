import axios from "axios"

export default async function getContacts() {
    try {
        const res = await axios.get(`https://excellent-dinosaur-a7b8ad2006.strapiapp.com/api/contacts`);

        const contacts = res.data.data

        if (!contacts) {
            return null;
        }
        return contacts;
    } catch (error: any) {
       return null;
    }
}