import { USER_DATA } from '~/configs/storageKeys';
import { useAuth } from '~/contexts/AuthContext';
import { getData } from '~/services/storage';

export const usePermission = (permissions) => {
  const { isAuthenticated } = useAuth();
  const userPermissions = getData(USER_DATA);

  return isAuthenticated && permissions.every(p => !!userPermissions.includes(p));
};
