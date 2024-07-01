
import LandlordClient from "./LandlordClient";
import getLandlord from "@/app/api/getLandlord";
import getLandlordsReviews from "@/app/api/getLandlordsReviews";
import getLandlordReviewAilableStatus from "@/app/api/getLandlordReviewAilableStatus.";
import getLandlordRating from "@/app/api/getLandlordRating";
import { getCurrentUser } from "@/app/api/getCurrentUser";

interface IParams {
    id: number
}


const LandlordPage = async ({ params }: { params: IParams }) => {
    const landlord = await getLandlord({id: params.id})
    const reviews = await getLandlordsReviews({id: params.id})
    const isAilable = await getLandlordReviewAilableStatus({id: params.id})
    const rating = await getLandlordRating({id: params.id})
    const currentUser = await getCurrentUser()
    
    return <LandlordClient currentUser={currentUser} rating={rating} landlord={landlord} reviews={reviews} isAilable={isAilable}/>
}

export default LandlordPage;