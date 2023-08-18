import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, RouterProvider} from "react-router-dom";
import FishbowlHome from "./fishbowl";
import EditEntry from "./fishbowl/entry/edit";
import EntriesPage from "./fishbowl/entry";
import DrawingPage from "./fishbowl/drawing";
import PrizesPage from "./fishbowl/prizes";
import CustomizeForm from "./fishbowl/customize-form";

let router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/fishbowl/:fishbowlId",
    element: <FishbowlHome />
  },
  {
    path: "/fishbowl/:fishbowlId/entry/new",
    element: <EditEntry />
  },
  {
    path: "/fishbowl/:fishbowlId/entry/:entryId",
    element: <EditEntry />
  },
  {
    path: "/fishbowl/:fishbowlId/entry",
    element: <EntriesPage />
  },
  {
    path: "/fishbowl/:fishbowlId/drawing",
    element: <DrawingPage />
  },
  {
    path: "/fishbowl/:fishbowlId/prizes",
    element: <PrizesPage />
  },
  {
    path: "/fishbowl/:fishbowlId/customize",
    element: <CustomizeForm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
