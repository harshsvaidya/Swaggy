import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { UserProvider } from './utils/UserContext'; // Import UserProvider

// Components
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./Cart";
import Error from "./components/Error";

// Lazy Loading for About and Grocery components
const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

const App = () => {
  const [userName, setUserName] = useState("John Doe"); // Define the state for userName

  return (
    <UserProvider value={{ loggedInUser: userName, setUserName }}>
      <RouterProvider router={appRouter} /> {/* Use RouterProvider to handle routing */}
    </UserProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Render the app to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
