import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, getCurrentPizzaQuantityById, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId}){
    const dispatch = useDispatch();
    const currentQuantity = useSelector( getCurrentPizzaQuantityById(pizzaId))


    return (
        <div className="flex gap-1 items-center md:gap-3"> 
            <Button type='round' onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span>{currentQuantity}</span>
            <Button type='round' onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity;