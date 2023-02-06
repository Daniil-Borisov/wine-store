import Loader from '@/components/ui/loaders/spinner/spinner';
import Router, { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { userData } from '@/store/user-atom';

const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const [userAtom] = useAtom(userData);

  if (!userAtom?.token && typeof window !== 'undefined') {
    router.push('/');
  }
  if (userAtom?.token) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <Loader showText={false} />;
};

export default PrivateRoute;
