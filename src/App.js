import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Explore from "./Pages/Explore/Explore";
import Profile from "./Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/login",
    element: <Login />,
    
  },
  {
    path: "/signup",
    element: <Signup />,
    
  },
  {
    path: "/Explore",
    element: <Explore />,
    
  },
  {
    path: "/username",
    element: <Profile />,
    
  },
]);

function App() {
  return (
    ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
    )
  );
}

export default App;
