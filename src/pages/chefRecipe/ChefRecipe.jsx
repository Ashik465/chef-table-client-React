import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../loader/LoadingSpinner';
import {  FaThumbsUp,FaUtensils} from "react-icons/fa";
import Recipe from '../recipe/Recipe';

const ChefRecipe = () => {

    const navigation = useNavigation();
    console.log(navigation.state);
  
    if (navigation.state === "loading") {
      return <LoadingSpinner></LoadingSpinner>;
    }

    const chefData =useLoaderData();
   const [chefDetails,setChefDetails] =useState(chefData)
    console.log(chefDetails.item)


const{chefPicture,chefName,yearsOfExperience,numRecipes,numLikes,chefBio} =chefDetails.item

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



   {/* recipe section  */}


    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20   container mx-auto my-40'>

   {chefDetails.item.recipes.map(recipe=><Recipe recipe={recipe}key={recipe.Id}></Recipe>)} 

    </div>





        </>
    );
};

export default ChefRecipe;