import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstRoute from "./routes/firstRoute/FirstRoute";
import SecondRoute from "./routes/secondRoute/SecondRoute";
import Root from "./routes/root/Root";
import Index from "./routes/index/Index";
import ErrorPage from "./routes/error/Errorpage";
import { useState } from "react";
import SunClickerContext from "./context/SunClickerContext";
import { CloudClickerContext } from "./context/CloudClickerContext";

function App() {
  const [sunCount, setSunCount] = useState(0);
  const [cloudCount, setCloudcount] = useState(0);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "first",
            children: [
              { index: true, element: <FirstRoute /> },
              {
                path: ":itemId",
                children: [
                  { index: true, element: <SecondRoute /> },
                  { path: ":thridId", element: <FirstRoute /> },
                ],
              },
            ],
          },
          { path: "second", element: <SecondRoute /> },
        ],
      },
      {
        path: "/third",
        element: <FirstRoute />,
      },
    ],
    { basename: "/React_Routing_and_useContext_exploration/" }
  );

  return (
    <CloudClickerContext.Provider value={{ cloudCount, setCloudcount }}>
      <SunClickerContext.Provider value={{ sunCount, setSunCount }}>
        <RouterProvider router={router} />
      </SunClickerContext.Provider>
    </CloudClickerContext.Provider>
  );
}

export default App;
