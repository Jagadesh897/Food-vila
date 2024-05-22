import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { useSelector } from "react-redux";



const Title = () => {
  return (
    <div className="mb-4">
      <a href="/">
        <img
          className="w-40 h-40"
          src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"
          alt="app-logo"
        />
      </a>
    </div>
  );
};

const Header = () => {
  const [title, setTitle] = useState("Food zone");
  const [loggedin, setloggedin] = useState(true);
  const Onlinestatus = useOnlinestatus();
  const cardvalue = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between  items-center p-4  bg-gray-300 border-solid border-slate-800">
      <Title />

      <h1
        className="cursor-pointer "
        onClick={() => {
          setTitle("Food villa");
        }}
      >
        {title}
      </h1>

      <div className="ml-auto ">
        <ul className="flex space-x-4 ">
          <li>online status:{Onlinestatus ? "🎆" : "📴"}</li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="font-bold  text-lg">
            
            <Link to="/Cart">cart ({cardvalue.length} items)</Link>
          </li>
          <li>
            <Link to="/lottery">lottery</Link>
          </li>
          {loggedin ? (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={() => {
                setloggedin(false);
              }}
            >
              Login
            </button>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => {
                setloggedin(true);
                console.log("you are logged off");
              }}
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
