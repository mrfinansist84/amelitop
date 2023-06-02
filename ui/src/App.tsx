import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export const App = () => (
  <React.Fragment>
      <div id="sw-header">
        {/* <Header /> */}
      </div>
      <div className="content-container">
        <RouterProvider router={router} />
      </div>
  </React.Fragment>
);