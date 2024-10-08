import axios from "axios"

export default async function getFaqs() {
    try {
        const res = await axios.get(`https://excellent-chickens-fb25f11199.strapiapp.com/api/faqs?populate=*`);

        const faq = res.data.data

        if (!faq) {
            return null;
        }
        return faq;
    } catch (error: any) {
       return null;
    }
}