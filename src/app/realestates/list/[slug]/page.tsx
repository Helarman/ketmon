"use server";

import { getCurrentUser } from "@/app/api/getCurrentUser";
import getRealEstate from "@/app/api/getRealEstate";
import RealEstateClient from "./RealEstateClient";
import getRealEstateAvilableStatus from "@/app/api/getRealEstateAvilableStatus";

interface IParams {
    slug: string
}

const RealEstatePage = async ({ params }: { params: IParams }) => {

    const currentUser = await getCurrentUser()
    const realEstate = await getRealEstate({ params })
    const isAvailable = await getRealEstateAvilableStatus({ params })

    return <>
        <RealEstateClient realEstate={realEstate} isAvailable={isAvailable as boolean} currentUser={currentUser} />
    </>
};

export default RealEstatePage;