import React from 'react';
import { Card } from 'react-bootstrap';

const FoodCard = (props) => {
    const food = props.food;
    return (
        <div className="">
            <Card className='w-75'>
                <Card.Img src={food.strMealThumb} className="w-100 img-fluid"/>
                <Card.Body>
                    <Card.Title>
                        <h3>{food.strMeal}</h3>
                        <button className="btn btn-danger" onClick={()=>props.handleClick(food)}>Add to cart</button>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodCard;