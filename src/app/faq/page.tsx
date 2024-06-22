
import getFaqs from "../api/getFaqs";
import HelpClient from "./HelpClient";

const HelpPage = async () => {
    const data = await getFaqs()
    return <HelpClient data={data}/>;
};

export default HelpPage;

