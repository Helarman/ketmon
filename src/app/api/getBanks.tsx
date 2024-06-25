import axios from "axios"

export default async function getBanks() {
    try {
        const res = await axios.get(`http://127.0.0.1:1337/api/banks`);

        const banks = res.data.data

        if (!banks) {
            return null;
        }
        return banks;
    } catch (error: any) {
       return null;
    }
}