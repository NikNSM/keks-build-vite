import { useAppSelector } from '../../../utils';
import { AutorizationStatus } from '../../../const';
import HeaderNotAutorization from './header-not-autorization/header-nor-autorization';
import HeaderAutorization from './header-autorization/header-autorization';

export default function Header(): JSX.Element {
  const autorizationStatus = useAppSelector((state) => state.user.status);
  const isAutorization = autorizationStatus === AutorizationStatus.AUTORIZATION;

  return (
    isAutorization ? <HeaderAutorization /> : <HeaderNotAutorization />
  );
}
