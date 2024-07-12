
import axios from "axios";

export const getCurrentUser = async () => {
    const { cookies } = await import("next/headers");
    const username = cookies().get("username")?.value;
    if (!username) {
        return null;
    }

    try {
        const response = await axios.get(`https://committed-life-48566f99cd.strapiapp.com/api/users?filters[username][$eq]=${username}`);
        return response.data[0];

    } catch (error) {
        console.error(`error fetching user ${error}`);
        return null;
    }
};
