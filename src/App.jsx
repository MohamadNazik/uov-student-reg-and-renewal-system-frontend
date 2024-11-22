import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import StudentID from "./pages/StudentID";
import RecordBook from "./pages/RecordBook";
import Renewal from "./pages/Renewal";
import ChangePassword from "./pages/ChangePassword";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/user-dashboard", element: <UserDashboard /> },
  { path: "/student-id", element: <StudentID /> },
  { path: "/record-book", element: <RecordBook /> },
  { path: "/renewal", element: <Renewal /> },
  { path: "/change-password", element: <ChangePassword /> },
  { path: "/*", element: <Home /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
