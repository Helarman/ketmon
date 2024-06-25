import getBanks from "../api/getBanks";
import getContacts from "../api/getContacts";
import { getCurrentUser } from "../api/getCurrentUser";
import WalletClient from "./WalletClient";

const WalletPage = async () => {
    const currentUser = await getCurrentUser()
    const banks = await getBanks()
    const contacts = await getContacts()

    return <WalletClient currentUser={currentUser} banks={banks} contacts={contacts}/>

};
export default WalletPage;