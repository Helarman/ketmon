
import getEmployer from "@/app/api/getEmployer";
import EmployerClient from "./EmployerClient";
import getReviews from "@/app/api/getReviews";
import getEmployerReviewAilavleStatus from "@/app/api/getEmployerReviewAilableStatus";
import getEmployerRating from "@/app/api/getEmployerRating";

interface IParams {
    id: number
}


const EmployerPage = async ({ params }: { params: IParams }) => {
    const employer = await getEmployer({id: params.id})
    const reviews = await getReviews({id: params.id})
    const isAilable = await getEmployerReviewAilavleStatus({id: params.id})
    const rating = await getEmployerRating({id: params.id})
    
    return <EmployerClient rating={rating} employer={employer} reviews={reviews} isAilable={isAilable}/>
}

export default EmployerPage;