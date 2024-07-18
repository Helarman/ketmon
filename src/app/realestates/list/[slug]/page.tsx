"use server";

import { getCurrentUser } from "@/app/api/getCurrentUser";
import getRealEstate from "@/app/api/getRealEstate";
import RealEstateClient from "./RealEstateClient";
import getRealEstateAvilableStatus from "@/app/api/getRealEstateAvilableStatus";
import { Button, Typography } from "@mui/material";
import getLandlordRating from "@/app/api/getLandlordRating";

interface IParams {
    slug: string
}

const RealEstatePage = async ({ params }: { params: IParams }) => {

    const currentUser = await getCurrentUser()
    const realEstate = await getRealEstate({ params })
    const isAvailable = await getRealEstateAvilableStatus({ params })
    const rating = await getLandlordRating({ id: realEstate.attributes.landlord.data.id })
    if (!realEstate) return (
        <>
            <Typography variant="h3">
                Ҳеч нарса топилмади
            </Typography>
            <Button color='error' href="https://wa.me/79107093030" component='a' variant="text">
                РЕКЛАМА БЕРИШ
            </Button>
        </>
    )
    return <>
        <RealEstateClient rating={rating} realEstate={realEstate} isAvailable={isAvailable as boolean} currentUser={currentUser} />
    </>
};

export default RealEstatePage;