import { BrowserRouter, Route, Routes } from "react-router";
import { Login, SignUp } from "../pages/Auth";
import PrivateRoute from "./PrivateRoute";
import {
  CreateTask,
  Dashboard,
  ManageTasks,
  ManageUsers,
} from "../pages/Admin";

import { MyTasks, UserDashboard, ViewTaskDetails } from "../pages/User";
import UserProvider from "../context/UserContext";
import Root from "../pages/Root";

const AppRouter = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin Route */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          {/* User Route */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route
              path="/user/task-details/:id"
              element={<ViewTaskDetails />}
            />
          </Route>

          <Route path="/" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default AppRouter;
