import { getCurrentUser } from "../api/getCurrentUser";
import WalletClient from "./WalletClient";

const WalletPage = async () => {
    const currentUser = await getCurrentUser()

    return <WalletClient currentUser={currentUser} />
};

export default WalletPage;