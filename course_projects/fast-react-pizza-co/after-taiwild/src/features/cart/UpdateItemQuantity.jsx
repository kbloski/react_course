import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId}){
    const dispatch = useDispatch();


    return (
        <div>
            <Button type='round' onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <Button type='round' onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity;