import { IMAGE_ID } from "../utils/Constants";
const Restaurantcard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
      <div className="bg-zinc-300 m-4 p-2 w-[250px] border-solid border-gray-600 "   >
        <img className="w-56 h-56" src={ IMAGE_ID + cloudinaryImageId }  />
        <h2 className="font-bold">{name}</h2>
        <h3 >{cuisines ? cuisines.join(", ") : " "}</h3>
        <h4>{avgRating} Stars</h4>
  
      </div>
    );
  };
export default Restaurantcard;
