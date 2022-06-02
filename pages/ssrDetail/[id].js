import React from 'react'
import dynamic from 'next/dynamic'

function Meal(meals) {
    const Details = dynamic(() => import('@components/Details'))
    const meal=meals.meals.meals[0]
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Details meals={meal} />
    </div>

  )
}

export default Meal

export async function getServerSideProps (ctx){
  const id = ctx.params.id
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const meals = await data.json();
  
  return {
      props:{meals}
  }
}