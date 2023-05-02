import React from 'react';
import banner from '../../assets/banner.jpg'
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../loader/LoadingSpinner';

const Home = () => {

const navigation = useNavigation()
console.log(navigation.state)

if(navigation.state ==='loading'){
    return <LoadingSpinner></LoadingSpinner>
}

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover Delicious Chef-Curated Recipes</h1>
      <p className="mb-5 ">Welcome to Chef Recipes, where you'll find a vast collection of gourmet recipes from some of the world's top chefs. Whether you're a beginner or a seasoned cook, our chef-curated recipes are sure to impress and inspire you. From classic comfort foods to international flavors, our recipes are designed to elevate your cooking and take your taste buds on a culinary adventure. Explore our collection and unleash your inner chef today!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;