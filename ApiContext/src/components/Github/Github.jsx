// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data = useLoaderData();
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then((Response)=>Response.json()).
    //     then((data)=>setData(data))
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white text-3xl">Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={100}/>
        </div>
    )

}
export default Github;

export const githubInfoLoader = async()=>{
    const resp = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return resp.json();
}