import Restaurantcard from "./Restaurantlist";
import { useState } from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//import search from "../asset/img/search.png";
//import { Menu_api } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

function filterData(searchText, restaurants) {
  if (searchText === " ") {
    return restaurants;
  }
  const datafilter = restaurants.filter((rest) =>
    rest.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return datafilter;
}
const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setallRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();
    console.log(json.data)
    setallRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log(allRestaurants);
  if (!allRestaurants) {
    return null;
  }
  const Onlinestatus = useOnlinestatus();
  if (Onlinestatus === false) {
    return (
      <div className="text-center px-8">
        <h1 className="text-2xl font-bold">
          your currently offline ! 😒 Please Check Your connection
        </h1>
      </div>
    );
  }
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search your favourite restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="p-2 border border-gray-300 rounded border-solid"
        />
       
        <button
          className="px-4 py-2 bg-green-500 m-4"
          onClick={() => {
            const checkFilter = filterData(searchText, allRestaurants);
            setfilteredRestaurants(checkFilter);
          }}
        >
          search
        </button>
      </div>
      
      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Restaurantcard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
