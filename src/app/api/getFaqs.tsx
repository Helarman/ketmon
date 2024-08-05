import axios from "axios"

export default async function getFaqs() {
    try {
        const res = await axios.get(`http://31.128.45.168:1337/api/faqs?populate=*`);

        const faq = res.data.data

        if (!faq) {
            return null;
        }
        return faq;
    } catch (error: any) {
       return null;
    }
}