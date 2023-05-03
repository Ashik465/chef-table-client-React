import React, { useState } from 'react';
import banner from '../../assets/banner.jpg'
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../loader/LoadingSpinner';
import Chef from '../chef/Chef';
import food1 from '../../assets/food1.jpg'
import food2 from '../../assets/food2.jpg'

const Home = () => {


const chefData = useLoaderData()
const [chef,setChef] =useState(chefData)

// console.log(chef[0].chefs)

    //loader 
const navigation = useNavigation()
console.log(navigation.state)

if(navigation.state ==='loading'){
    return <LoadingSpinner></LoadingSpinner>
}
   



    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover Delicious Chef-Curated Recipes</h1>
      <p className="mb-5 ">Welcome to Chef Recipes, where you'll find a vast collection of gourmet recipes from some of the world's top chefs. Whether you're a beginner or a seasoned cook, our chef-curated recipes are sure to impress and inspire you. From classic comfort foods to international flavors, our recipes are designed to elevate your cooking and take your taste buds on a culinary adventure. Explore our collection and unleash your inner chef today!</p>
      <button className="btn btn-primary">Explore recipes</button>
    </div>
  </div>
</div> 

 {/* chef section  */}

 <section className='container mx-auto my-40'>

   <h1 className='text-5xl text-center font-bold mb-10 '> Meet Our Extraordinary chef  </h1>

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12'>
    {chef[0].chefs.map(chef=><Chef chef={chef} key={chef.chefId}></Chef>)}
</div>
   </section>



 {/* popular food section */}

<section className='container mx-auto my-40'>
<h1 className='text-5xl text-center font-bold mb-10 '> Some popular food  </h1>

{/* start */}





{/* end */}

</section>


        </>
    );
};

export default Home;