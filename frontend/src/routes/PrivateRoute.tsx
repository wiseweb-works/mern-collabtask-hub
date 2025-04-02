import { Outlet } from "react-router";

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  console.log(allowedRoles);
  return <Outlet />;
};

export default PrivateRoute;
