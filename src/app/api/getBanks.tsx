import axios from "axios"

export default async function getBanks() {
    try {
        const res = await axios.get(`https://excellent-chickens-fb25f11199.strapiapp.com/api/banks`);

        const banks = res.data.data

        if (!banks) {
            return null;
        }
        return banks;
    } catch (error: any) {
       return null;
    }
}