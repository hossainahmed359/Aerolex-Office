import { Forbidden } from "../layout/Forbidden";
import { useRoutePermission } from "./useRoutePermission";

export const ProtectedRoute = ({children}) => {
  const hasPermission = useRoutePermission();
  return hasPermission ? children : <Forbidden />;
}
