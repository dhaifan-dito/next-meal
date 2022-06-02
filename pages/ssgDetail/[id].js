import React from 'react'
import dynamic from 'next/dynamic'

function Meal(paths, meals) {
  const Details = dynamic(() => import('@components/Details'))
  const meal = paths.meals.meals[0];
  return (
    // <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    //   <h1>{meal.strMeal}</h1>
    //   <img style={{width:'100px', height:'100px'}} src={meal.strMealThumb} alt={meal.strMeal}/>
    //   <p>How To Cook: {meal.strInstructions}</p>
    // </div>
    <Details meals={meal} />
  )
}

export default Meal

export async function getStaticPaths() {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
  const result = await data.json();
  const meals = result.meals;
  const paths = meals.map((item) => {
    return {
      params: { id: item.idMeal.toString() },
    };
  });
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps (ctx){
  const id = ctx.params.id
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const meals = await data.json();
  
  return {
      props:{meals}
  }
}