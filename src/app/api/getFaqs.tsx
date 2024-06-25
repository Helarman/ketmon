import axios from "axios"

export default async function getFaqs() {
    try {
        const res = await axios.get(`http://127.0.0.1:1337/api/faqs?populate=*`);

        const faq = res.data.data

        if (!faq) {
            return null;
        }
        return faq;
    } catch (error: any) {
       return null;
    }
}