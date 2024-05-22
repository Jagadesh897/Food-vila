import React from 'react';
import { ReactDOM } from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Menu_api } from "../utils/Constants";



const useRestaurantmenu = (resId,Menu_api) => {  
    
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    },[]);

    const getRestaurantInfo = async () => {
        const data = await fetch(Menu_api + resId );
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
};

export default useRestaurantmenu;
