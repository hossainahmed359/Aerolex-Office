import { ProtectedRoute } from '~/components/auth/ProtectedRoute';
import '~/styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ProtectedRoute {...pageProps}>
      <Component {...pageProps} />
    </ProtectedRoute>
  );
}

export default MyApp;
