import { createBrowserRouter } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },

  {
    path: "/pastes",
    element: <div></div>,
  },

  {
    path: "/pastes/:id",
    element: <div></div>,
  },
]);

function App() {
  return <div>Gaurav Singh</div>;
}

export default App;
