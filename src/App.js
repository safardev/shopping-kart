import "./App.css";
import NavComp from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavComp />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
