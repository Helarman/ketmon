import axios from "axios"

export default async function getBanks() {
    try {
        const res = await axios.get(`https://excellent-dinosaur-a7b8ad2006.strapiapp.com/api/banks`);

        const banks = res.data.data

        if (!banks) {
            return null;
        }
        return banks;
    } catch (error: any) {
       return null;
    }
}