import React, { useContext, useState } from "react";
import banner from "../../assets/banner.jpg";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../../loader/LoadingSpinner";
import Chef from "../chef/Chef";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";
import food5 from "../../assets/food 5.jpg";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const chefData = useLoaderData();
  const [chef, setChef] = useState(chefData);
  const {loader} = useContext(AuthContext)

  // console.log(chef[0].chefs)

  //loader
  const navigation = useNavigation();
  console.log(navigation.state);

  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

     if(loader){
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Discover Delicious Chef-Curated Recipes
            </h1>
            <p className="mb-5 ">
              Welcome to Chef Recipes, where you'll find a vast collection of
              gourmet recipes from some of the world's top chefs. Whether you're
              a beginner or a seasoned cook, our chef-curated recipes are sure
              to impress and inspire you. From classic comfort foods to
              international flavors, our recipes are designed to elevate your
              cooking and take your taste buds on a culinary adventure. Explore
              our collection and unleash your inner chef today!
            </p>
            <button className="btn btn-primary">Explore recipes</button>
          </div>
        </div>
      </div>

      {/* chef section  */}

      <section className="container mx-auto my-40">
        <h1 className="text-5xl text-center font-bold mb-10 ">
          {" "}
          Meet Our Extraordinary chef{" "}
        </h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12">
          {chef[0].chefs.map((chef) => (
            <Chef chef={chef} key={chef.chefId}></Chef>
          ))}
        </div>
      </section>

      {/* popular food section */}

      <section className="container mx-auto my-40">
        <h1 className="text-5xl text-center font-bold mb-10 ">
          {" "}
          Some popular American food{" "}
        </h1>

        {/* start */}

        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={food3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={food2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={food1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={food4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* end */}
      </section>

      {/* Ingredient of the Week section */}

      <section className="container mx-auto my-40">
        <h1 className="text-5xl text-center font-bold mb-10 ">
          {" "}
          Ingredient of the Week{" "}
        </h1>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Sweet Potatoes
          </div>
          <div className="collapse-content">
            <p>
              The Ingredient of the Week for American cuisine is Sweet Potatoes.
              Sweet potatoes are a popular and versatile ingredient in American
              cuisine. They can be used in a variety of dishes, including
              casseroles, pies, soups, and salads. Sweet potatoes are high in
              fiber, vitamins, and minerals, making them a healthy choice for
              any meal.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">Corn</div>
          <div className="collapse-content">
            <p>
              The Ingredient of the Week for American food could be corn. Corn
              is a versatile and essential ingredient in many American dishes,
              from cornbread and corn on the cob to tortillas and popcorn. It is
              also used as a primary ingredient in many processed foods such as
              cereal, corn syrup, and corn starch. Corn is an integral part of
              American agriculture, and it has played a significant role in the
              country's history and culture. Therefore, featuring corn as the
              Ingredient of the Week could be a great way to explore its
              versatility and cultural significance in American cuisine.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">Blueberries</div>
          <div className="collapse-content">
            <p>
              Blueberries are a popular ingredient in American cuisine,
              especially in desserts and breakfast dishes. Here are some recipe
              ideas that highlight blueberries as the ingredient of the week: 1.
              Blueberry Pancakes: Mix fresh blueberries into your pancake batter
              for a delicious and healthy breakfast option. 2. Blueberry
              Muffins: Bake a batch of blueberry muffins for an easy grab-and-go
              breakfast or snack. Sprinkle some sugar on top for an extra
              crunch. 3. Blueberry Pie: Make a classic American dessert with a
              blueberry pie. Use fresh or frozen blueberries, and add a hint of
              lemon juice for a tangy twist. 4. Blueberry Smoothie: Blend fresh
              or frozen blueberries with yogurt, milk, and honey for a
              refreshing and nutritious smoothie. 5. Blueberry Salad: Toss fresh
              blueberries into your salad for a pop of color and sweetness. Add
              some feta cheese and nuts for a complete meal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
