import React, { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import {FaHeart  } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';


const Recipe = ({ recipe }) => {
  const { recipeName, ingredients, cookingMethod, rating } = recipe;
 
  const[favorite,setFavorite]=useState(false)

    const handleToast = () => {
        toast.success('Added to favorites');
          
        setFavorite(true)

    }

  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{recipeName}</h2>
          <>
          <span className=" font-bold mt-4">Ingredients:</span>
            {" "}
            <ul className="list-disc list-inside		">
              {" "}
              {ingredients.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>{" "}
          </>

          <p> <span className=" font-bold">Cooking-Method:</span>  {cookingMethod}</p>
            
            <p><Rating
      style={{ maxWidth: 180 }}
      value={rating}
      readOnly
    /></p>
            
          <div className="card-actions justify-end">
            <button onClick={handleToast} disabled={favorite}  className=" btn btn-main">Favorite <FaHeart></FaHeart></button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
