"use server";

import getJob from "@/app/api/getJob";
import JobClient from "./JobClient";
import getvJobAilableStatus from "@/app/api/getvJobAilableStatus";
import { getCurrentUser } from "@/app/api/getCurrentUser";
import getEmployerRating from "@/app/api/getEmployerRating";

interface IParams {
    slug: string
}

const JobPage = async ({ params }: { params: IParams }) => {
    const currentUser = await getCurrentUser()
    const job = await getJob({ params })
    const isAvailable = await getvJobAilableStatus({ params })
    const rating = await getEmployerRating({id: job.attributes.employer.data.id})
    
    return <JobClient rating={rating} job={job} isAvailable={isAvailable as boolean} currentUser={currentUser}/>
};

export default JobPage;