"use server";

import getCities from "@/app/api/getCities";
import RealEstateClient from "./RealEstatesClient";
import getRealEstates from "@/app/api/getRealEstates";

const RealEstatePage = async ({ searchParams }: { searchParams: any }) => {
    const cities = await getCities()
    const realEstates = await getRealEstates({ searchParams })
    return <RealEstateClient cities={cities} realEstates={realEstates.data} pagination={realEstates.meta}/>
};

export default RealEstatePage;