import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import { Menu_api } from "../utils/Constants";
import Restaurantcategory from "./Restaurantcategory";
import React, { useState } from 'react';



const RestaurantMenu = () => {
  const { resId } = useParams();
  const[showindex,setshowindex] = useState(false);
  

  const resInfo = useRestaurantmenu(resId, Menu_api);

  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  if (!resInfo.cards || resInfo.cards.length === 0) {
    return <div>No menu items available</div>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const catogories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="text-center p-2">
      <h1 className="text-3xl  font-bold">{name}</h1>
      <p className="font-semibold">
        {" "}
        {cuisines.join(", ") + " - " + costForTwoMessage}
      </p>
      {catogories.map((category,index) => (
        <Restaurantcategory data={category.card?.card}  key={index} 
          showitems={index === showindex ? true : false}
          setshowindex={() => setshowindex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
