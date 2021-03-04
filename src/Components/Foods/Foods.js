import React from 'react';
import FoodCard from '../FoodCard';
import { useEffect, useState } from 'react';
import Form from '../Form/Form';
const Foods = () => {

        const [search,updateSearch] = useState('');
        const [food,setFood] = useState([])
        const[query,setQuery] = useState('');
        const [cart,setCart] = useState([])
        useEffect(() => {
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
          .then(response =>response.json())
          .then(data =>setFood(data.meals))
        },[query])
        const foodSearch = e => {
          updateSearch(e.target.value)
          console.log(search);
        }
        const updateQuery = e => {
          e.preventDefault();
          setQuery(search);
        }
       const handleClick=(foodValue) => {
         const newCart = [...cart,foodValue]
         setCart(newCart)
      
       }
    return (
        <div>
             <Form search={search} query={query} cart={cart} foodSearch={foodSearch} updateQuery={updateQuery}></Form>
            <div className="food-card">
    {
      food.map(f=><FoodCard food={f} key={f.idMeal} handleClick = {handleClick}></FoodCard>)
    }
     </div>

        </div>
    );
};

export default Foods;