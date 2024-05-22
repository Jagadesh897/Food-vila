import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Itemlist from './Itemlist';
import { removeItem } from '../utils/cartSlice';


const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch();
  const handleitem = () =>{
    dispatch(removeItem())
    
  }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-lg">Check out your meal</h1>
      <div className="w-6/12 m-auto">
      <button className="rounded-lg bg-orange-300 shadow-zinc-300" onClick={handleitem}>clear all</button>
      {cartitems.length === 0 && (
        <h1 className="font-bold text-amber-700 text-2xl">Add your Cart items </h1>
      )}
      <Itemlist items={cartitems}></Itemlist>
      </div>
    </div>
  )
}

export default Cart;