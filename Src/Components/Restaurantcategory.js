import Itemlist from "./Itemlist";
import {useState} from "react";
const Restaurantcategory = ({ data ,showitems,setshowindex}) => {
  
  const handleClick = () => {
    setshowindex(!showitems);


  }
  
  return (
    <div className="flex items-center justify-center p-2">
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg ">
        {/**Header */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showitems && <Itemlist items={data.itemCards} />}
        {/*accordian*/}
      </div>
    </div>
  );
};

export default Restaurantcategory;
