import axios from "axios"

export default async function getBanks() {
    try {
        const res = await axios.get(`http://31.128.45.168:1337/api/banks`);

        const banks = res.data.data

        if (!banks) {
            return null;
        }
        return banks;
    } catch (error: any) {
       return null;
    }
}