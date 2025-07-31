import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { removeItem, clearCart } from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId)); 
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <ItemList items={cartItems} onRemoveItem={handleRemoveItem} />
          
          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-800">
                Total Items: {cartItems.length}
              </span>
              <span className="text-2xl font-bold text-green-600">
                ₹{calculateTotal()}
              </span>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex-1 px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200 font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
