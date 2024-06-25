"use server";

import getJob from "@/app/api/getJob";
import JobClient from "./JobClient";
import getvJobAilableStatus from "@/app/api/getvJobAilableStatus";
import { getCurrentUser } from "@/app/api/getCurrentUser";

interface IParams {
    slug: string
}

const JobPage = async ({ params }: { params: IParams }) => {
    const currentUser = await getCurrentUser()
    const job = await getJob({ params })
    const isAvailable = await getvJobAilableStatus({ params })

    return <JobClient job={job} isAvailable={isAvailable as boolean} currentUser={currentUser}/>
};

export default JobPage;