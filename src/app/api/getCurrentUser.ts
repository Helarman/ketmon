
import axios from "axios";

export const getCurrentUser = async () => {
    const { cookies } = await import("next/headers");
    const username = cookies().get("username")?.value;
    if (!username) {
        return username;
    }

    try {
        const response = await axios.get(`http://127.0.0.1:1337/api/users?filters[username][$eq]=${username}`);
        return response.data[0];

    } catch (error) {
        console.error(`error fetching user ${error}`);
        return null;
    }
};
