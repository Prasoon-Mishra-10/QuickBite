import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./contants";
const RestaurantMenu = () => {
    //we can read the dynamic URL by using params
    const params = useParams();
    const {resId} = params;

    const [Restaurant,setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.2231255&lng=81.34544170000001&restaurantId=99142&submitAction=ENTER")
        const json = await data.json();
        setRestaurant(json.data);
    }
    return (
        <div>
            <h1>Restaurant id: {resId} </h1>
            <h2>{Restaurant.name}</h2>
            <img src="{IMG_CDN_URL + restaurant.cloudinaryImageId" />
        </div>
    );
};

export default RestaurantMenu;