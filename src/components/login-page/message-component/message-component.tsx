import { AutorizationStatus } from '../../../const';
import { useAppSelector } from '../../../utils';

const styleErrors = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'red',
  fontSize: '20px',
  border: '2px, solid, red',
  borderRadius: '30px',
  height: '50px',
};

export default function MessageComponent(): JSX.Element | string {
  const statusAutorization = useAppSelector((state) => state.user.status);
  const messageErrors = useAppSelector((state) => state.user.error);

  return statusAutorization === AutorizationStatus.ERROR ? <div style={styleErrors}><p>{messageErrors}</ p></ div> : '';
}

