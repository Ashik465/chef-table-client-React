import React from 'react';

import {  FaThumbsUp,FaUtensils} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {

    console.log(chef)
   const {chefPicture,chefName,yearsOfExperience,numRecipes,numLikes,chefId} =chef

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure><img src={chefPicture} alt="chef" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{chefName}</h2>
    <p className=' text-xl'>Experience:{yearsOfExperience} years</p>
    <div className='flex gap-3 items-center text-xl '>
      <div>Likes: {numLikes} </div>  
     <div><FaThumbsUp></FaThumbsUp></div>
        </div>
    <div className='flex gap-3 items-center text-xl '>
      <div>Recipes: {numRecipes} </div>  
     <div><FaUtensils></FaUtensils></div>
        </div>
    <div className="card-actions justify-end">
      <Link to={`/${chefId}`} className="btn btn-main">View Recipes</Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Chef;