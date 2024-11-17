import { createContext, useState } from "react";

export const UserContext = createContext({
  loggedInUser: "Default User",
  logoutUser: () => {}, // Define the logout function
});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("Harsh Vaidya");

  const logoutUser = () => {
    setLoggedInUser(null); // This effectively logs out the user
  };

  return (
    <UserContext.Provider value={{ loggedInUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
