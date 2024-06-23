import { useAppSelector } from '../../../utils';
import { RegistrationStatus } from '../../../const';
const styleSuccessfully = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'green',
  fontSize: '20px',
  border: '2px, solid, green',
  borderRadius: '30px',
  height: '50px',
};

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
  const statuRegitration = useAppSelector((state) => state.user.registrationStatus);
  const messageErrors = useAppSelector((state) => state.user.error);
  const messageSuccessfullyRegistration = 'Регистрация прошла успешно!';

  if (statuRegitration === RegistrationStatus.SUCCESSFULLY) {
    return (
      <div style={styleSuccessfully}><p>{messageSuccessfullyRegistration}</ p></ div>
    );
  }

  if (statuRegitration === RegistrationStatus.ERROR) {
    return (
      <div style={styleErrors}><p>{messageErrors}</ p></ div>
    );
  }

  return '';
}
