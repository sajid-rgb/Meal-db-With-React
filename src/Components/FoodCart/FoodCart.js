import React from 'react';
import { Link } from 'react-router-dom';

const FoodCart = (props) => {
    const foods = props.food;
    let count =0;
    let total = 0;
    for (let i=0;i<foods.length;i++){
         total = count+total;
        count++
    }
    return (
        <div className='w-25' style={{backgroundColor:'grey',margin:'0 auto',borderRadius:'10px'}}>
          {
                foods.map(food=>
                        <li style={{listStyle:"square"}}>{food.strMeal}</li>
                   
)
            }
        
             <h4 >Total: ${total}</h4>
         <Link to="/Order"><button className='btn btn-danger mt-2 mb-2'>Review Order</button></Link>
          
        </div>
    );
};

export default FoodCart;