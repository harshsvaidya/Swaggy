import { useState } from "react";

const User = ({ name }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80 mx-auto text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Name: {name}</h2>
      <h3 className="text-gray-600 text-md">Location: Vadodara, Gujarat</h3>
      <h4 className="text-gray-500 text-sm mt-2">Contact: @harshvaidya04</h4>
    </div>
  );
};

export default User;
