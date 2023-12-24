import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Error from "./pages/error.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "./i18n.ts";
import "./i18n.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.body!).render(<RouterProvider router={router} />);

i18n.on("languageChanged", () => {
  const userLanguage = navigator.language;
  const language = userLanguage.split("-")[0] === "fr" ? "fr" : "en";
  document.documentElement.lang = language;
});
