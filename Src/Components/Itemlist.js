import { useDispatch } from "react-redux";
import { IMAGE_ID } from "../utils/Constants";
import { addItem } from "../utils/cartSlice";
const Itemlist = ({ items }) => {
  const dispatch = useDispatch();
  const handleitem = (item) =>{
    dispatch(addItem(item));
  }
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border border-gray-200 bottom-0 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-semibold">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-sm ">{item.card.info.description}</p>
          </div>
          <div className="w-40 p-4">
            <div className="absolute">
              <button className="p-2 bg-black shadow-lg m-16 text-white rounded-lg"
              onClick={() => handleitem(item)}>
                Add+
              </button>
            </div>
            <img src={IMAGE_ID + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
