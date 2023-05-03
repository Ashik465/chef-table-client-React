import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../loader/LoadingSpinner';
import {  FaThumbsUp,FaUtensils} from "react-icons/fa";

const ChefRecipe = () => {

    const navigation = useNavigation();
    console.log(navigation.state);
  
    if (navigation.state === "loading") {
      return <LoadingSpinner></LoadingSpinner>;
    }

    const chefData =useLoaderData();
   const [chefDetails,setChefDetails] =useState(chefData)
    console.log(chefDetails.item)


const{chefPicture,chefName,yearsOfExperience,numRecipes,numLikes,chefId,chefBio} =chefDetails.item

    return (
        <>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={chefPicture} className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{chefName}</h1>
      <p className="py-6">{chefBio}</p>
      <div className='flex gap-3 items-center text-xl '>
      <div>Likes: {numLikes} </div>  
     <div><FaThumbsUp></FaThumbsUp></div>
        </div>
    <div className='flex gap-3 items-center text-xl '>
      <div>Recipes: {numRecipes} </div>  
     <div><FaUtensils></FaUtensils></div>
        </div>
        <p className=' text-xl'>Experience:{yearsOfExperience} years</p>
     
    </div>
  </div>
</div>



        </>
    );
};

export default ChefRecipe;