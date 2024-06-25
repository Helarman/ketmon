import axios from "axios"

export default async function getContacts() {
    try {
        const res = await axios.get(`http://127.0.0.1:1337/api/contacts`);

        const contacts = res.data.data

        if (!contacts) {
            return null;
        }
        return contacts;
    } catch (error: any) {
       return null;
    }
}