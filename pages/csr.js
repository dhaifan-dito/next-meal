import React, {useEffect, useState} from 'react';
import Link from 'next/link'

function CSR() {
    const [meals, setmeals] = useState(null);
 
     const fetchData = async() => {
         const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
         const result = await data.json();
         setmeals(result.meals);
     } 

     useEffect(() => {
           fetchData();
     }, [])

     console.log(meals)

  return (
    <div>
        <Link href="/"><p>home</p></Link>
        <h2>Meals List</h2>
       
        {
            meals && meals.length > 0 ? (
                <div style={{display:'grid', gridTemplateColumns:'auto auto auto auto'}}>
                    {
                        meals.map((meal) => (
                            <div key={meal.idMeal} style={{margin:'16px'}}>
                                <h4 style={{color:'black'}}>{meal.strMeal}</h4>
                                <img style={{width:'100px', height:'100px'}} src={meal.strMealThumb} alt={meal.strMeal}/>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <p>loading...</p>
            )
        }
    </div>
  )
}
 
export default CSR