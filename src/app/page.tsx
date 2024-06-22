
import getCategories from "./api/getCategories";
import getCities from "./api/getCities";
import { getCurrentUser } from "./api/getCurrentUser";
import getHomePageData from "./api/getHomePageData";
import HomeClient from "./components/HomeClient";

export default async function  Home() {
  
  const data = await getHomePageData();
  const categories = await getCategories()
  const cities = await getCities()
  
  return (
    
      <HomeClient  data={data} categories={categories} cities={cities}/>
  );
}
