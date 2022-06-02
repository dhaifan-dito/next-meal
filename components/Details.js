import React from 'react'

function Details(meals) {
    const meal=meals.meals
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <h1>{meal.strMeal}</h1>
    <img style={{width:'100px', height:'100px'}} src={meal.strMealThumb} alt={meal.strMeal}/>
    <p style={{width:'50%'}}><span style={{fontWeight:'bold'}}>How To Cook {meal.strMeal}:</span> {meal.strInstructions}</p>
    </div>
  )
}

export default Details