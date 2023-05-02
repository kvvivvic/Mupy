import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Suggest from "./pages/Suggest";
import SuggestDetail from "./pages/SuggestDetail";
import NewSuggest from "./pages/NewSuggest";
import Artist from "./pages/Artist";
import ArtistDetail from "./pages/ArtistDetail";
import NewArtist from "./pages/NewArtist";
import Free from "./pages/Free";
import FreeDetail from "./pages/FreeDetail";
import NewFree from "./pages/NewFree";
import Likes from "./pages/Likes";
import LoginPage from "./pages/LoginPage";
import SignIn from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/suggest",
        element: <Suggest />,
      },
      {
        path: "/suggest/:id",
        element: <SuggestDetail />,
      },
      {
        path: "/suggest/new",
        element: <NewSuggest />,
      },
      {
        path: "/artist",
        element: <Artist />,
      },
      {
        path: "/artist/:id",
        element: <ArtistDetail />,
      },
      {
        path: "/artist/new",
        element: <NewArtist />,
      },
      {
        path: "/free",
        element: <Free />,
      },
      {
        path: "/free/:id",
        element: <FreeDetail />,
      },
      {
        path: "/free/new",
        element: <NewFree />,
      },
      {
        path: "/likes",
        element: <Likes />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
