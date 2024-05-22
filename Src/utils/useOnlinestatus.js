import React, { useEffect, useState } from 'react'

const useOnlinestatus = () => {
    const [Onlinestatus,setonlinestatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false);
        })
        window.addEventListener("online",()=>{
            setonlinestatus(true);
        })
    },[])
    return Onlinestatus;
}

export default useOnlinestatus;