import { createBrowserRouter } from "react-router-dom";;
import Root from '../pages/root';
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('bookData.json'),
        Component: Home
      },
      {
        path: "about",
        Component: About
      }
    ]
  }
]);