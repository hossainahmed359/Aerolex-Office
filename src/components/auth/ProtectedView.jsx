import { usePermission } from "~/components/auth/usePermission";
import { Forbidden } from "../layout/Forbidden";

export const ProtectedView = ({children, permisions}) => {
  const hasPermission = usePermission(permisions);
  return hasPermission ? children : <Forbidden />;
}
