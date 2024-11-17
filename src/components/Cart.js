import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { removeItem } from '../utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Handle item removal
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));  // Ensure itemId is passed correctly
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ItemList items={cartItems} onRemoveItem={handleRemoveItem} />
      )}
    </div>
  );
};

export default Cart;
