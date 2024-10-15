import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const router = AppRoutes();
  return <RouterProvider router={router} />;
}

export default App;
