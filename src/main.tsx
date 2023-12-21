import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./i18n.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/sa",
    element: <div>salut</div>,
  },
]);

ReactDOM.createRoot(document.body!).render(<RouterProvider router={router} />);
