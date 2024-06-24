import { Navigate } from 'react-router-dom';
import { AddressesRoute, AutorizationStatus } from '../../../const';
import { useAppSelector } from '../../../utils';

type TypePrivateFavoriteProps = {
  children: JSX.Element;
}

export default function PrivateRouteFavorite({ children }: TypePrivateFavoriteProps): JSX.Element {
  const status = useAppSelector((state) => state.user.status);

  return (
    status === AutorizationStatus.AUTORIZATION ? children : <Navigate to={AddressesRoute.LogIn} />
  );
}
