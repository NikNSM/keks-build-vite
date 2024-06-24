import { Navigate } from 'react-router-dom';
import { AddressesRoute, AutorizationStatus } from '../../../const';
import { useAppSelector } from '../../../utils';

type TypePrivateRouteLoginSignupProps = {
  children: JSX.Element;
}

export default function PrivateRouteLoginSignup({ children }: TypePrivateRouteLoginSignupProps): JSX.Element {
  const status = useAppSelector((state) => state.user.status);

  return (
    status === AutorizationStatus.NO_AUTORIZATION || status === AutorizationStatus.ERROR ? children : <Navigate to={AddressesRoute.Main} />
  );
}
