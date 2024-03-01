import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContanier from "./components/MainContanier";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    // this will go inside Outlet which is in Body
    {
      path: "/",
      element: <MainContanier />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
  ],
}]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
