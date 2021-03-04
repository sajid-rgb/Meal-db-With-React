import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faShoppingCart,faYoutube} from '@fortawesome/free-brands-svg-icons'

const ProductDetails = () => {
    const {foodKey} = useParams()
    const [foodItem,setFoodItem] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodKey}`)
          .then(response =>response.json())
          .then(data =>setFoodItem(data.meals))

    })
    return (
        <div>
                         {
              foodItem.map(food =><div>
                   <div className="card mt-4 w-50 mb-3" style={{margin:'0 auto'}}>
                      <div className=" ">
                      <img src={food.strMealThumb} className="card-img-top w-md-25"/>
                      </div>
                      <div className="card-header w-100 " style={{margin:'0 auto',backgroundColor:'green',border:'none'}}>
                      <h1 className="card-title w-md-50">{food.strMeal}</h1>
                  <h5>Category: {food.strCategory}</h5>
                      </div>
                    <div className="card-body w-md-75 " style={{margin:'0 auto'}}>
                  <p style={{textAlign:'justify'}}>{food.strInstructions}</p>
                  <a href={food.strYoutube} target='_'><span style={{color:'red'}}><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></span> Watch Recipe</a>
                    </div>
                    <div className="card-footer">
                        <button style={{backgroundColor:'red',border:'2px solid black',color:'white',width:'150px',height:'35px'}}>Add to cart</button>
                    </div>
                   </div>

                  </div>)
          }
        </div>
    );
};

export default ProductDetails;