import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderDetails, total, items } = location.state || {};

  if (!orderDetails) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Go Home
        </button>
      </div>
    );
  }

  const orderId = `ORD${Date.now()}`;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <div className="text-center mb-8">
        <div className="text-6xl text-green-500 mb-4">✅</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600">Thank you for your order. We'll deliver it to you soon!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Details */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div>
              <span className="font-semibold">Order ID:</span>
              <span className="ml-2 text-indigo-600 font-mono">{orderId}</span>
            </div>
            <div>
              <span className="font-semibold">Total Amount:</span>
              <span className="ml-2 text-green-600 font-bold">₹{total}</span>
            </div>
            <div>
              <span className="font-semibold">Payment Method:</span>
              <span className="ml-2 capitalize">{orderDetails.paymentMethod}</span>
            </div>
            <div>
              <span className="font-semibold">Expected Delivery:</span>
              <span className="ml-2">30-45 minutes</span>
            </div>
          </div>
        </div>

        {/* Delivery Details */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Address</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-semibold">{orderDetails.name}</p>
            <p>{orderDetails.address}</p>
            <p>{orderDetails.city}, {orderDetails.pincode}</p>
            <p>Phone: {orderDetails.phone}</p>
            <p>Email: {orderDetails.email}</p>
          </div>
        </div>
      </div>

      {/* Ordered Items */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ordered Items</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-3">
            {items?.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.imageUrl || "/kitten-404.jpg"}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-semibold text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4 justify-center">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
        >
          Print Receipt
        </button>
      </div>

      {/* Order Tracking Info */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Order Tracking</h3>
        <p className="text-blue-700 text-sm">
          You can track your order status by visiting our tracking page with Order ID: {orderId}
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
