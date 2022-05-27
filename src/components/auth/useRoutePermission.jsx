// import { USER_DATA } from '~/configs/storageKeys';
import { useRouter } from 'next/router';
import { USER_DATA } from '~/configs/storageKeys';
import { HOME_PATH } from '~/constants/route';
import { useAuth } from '~/contexts/AuthContext';
import { getData } from '~/services/storage';
// import { getData } from './storage';

// const checkPermission = (isAuthenticated, route) => {
//   return isAuthenticated && getData(USER_DATA).includes(route);
// }

export const useRoutePermission = () => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useRouter();

  switch (pathname) {
    case HOME_PATH:
      // return checkPermission(isAuthenticated, pathname);
      return true;

    default:
      return true;
  }
};
