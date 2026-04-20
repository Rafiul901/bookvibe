import { createBrowserRouter } from "react-router-dom";;
import Root from '../pages/root';
import Home from "../pages/Home";
import About from "../pages/About";
import BookDetails from "../pages/BookDetails";
import ReadList from "../pages/ReadList";

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
        element:<ReadList></ReadList>,
         loader: () => fetch('bookData.json')
      },
      {
        path:'/bookDetails/:id',
        element:<BookDetails></BookDetails>,
         loader: () => fetch('bookData.json'),
      }
    ]
  }
]);