import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import PagesToRead from "./pages/PagesToRead";
import BookDetails from "./pages/BookDetails";
import { Toaster } from "react-hot-toast";
import Read from "./components/Read";
import Wishlist from "./components/Wishlist";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails/>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/listed",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <Read/>,
          },
          {
            path: 'wishlist',
            element: <Wishlist/>
          }
        ]
      },
      {
        path: "/read",
        element: <PagesToRead />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster/>
  </React.StrictMode>
);
