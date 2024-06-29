import axios from "axios"

export default async function getFaqs() {
    try {
        const res = await axios.get(`https://dazzling-symphony-5fc97c5a00.strapiapp.com/api/faqs?populate=*`);

        const faq = res.data.data

        if (!faq) {
            return null;
        }
        return faq;
    } catch (error: any) {
       return null;
    }
}