import { useEffect, useState } from 'react';
import { AddressesRoute, RegistrationStatus } from '../../const';
import { Link } from 'react-router-dom';
import NameComponents from './name-components/name-components';
import MailComponent from './mail-component/mail.component';
import PasswordComponent from './password-component/password-component';
import AvatarComponent from './avatar-component/avatar-component';
import ButtonSubmit from './button-submit/button-submit';
import MessageComponent from './message-component/message-component';
import { registrationUser } from '../../store/users-slice/api-action';
import { useAppDispatch, useAppSelector } from '../../utils';

export type TypeValidateAutorizationPage = {
  validName: boolean;
  validEmail: boolean;
  validPassword: boolean;
  validAvatar: boolean | null;
}

export type TypeFormAutorizationPage = {
  name: string;
  email: string;
  password: string;
  avatar: null | File;
}


export default function AutorizationPage(): JSX.Element {
  const regexpPassword = /^\w*([a-z]+\d+|\d+[a-z]+)+\w*$/i;
  const regexpEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+).\w{2,3}$/i;
  const regexpName = /^[a-zа-яё]+$/i;
  const registrationStatus = useAppSelector((state) => state.user.registrationStatus);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<TypeFormAutorizationPage>({
    name: '',
    email: '',
    password: '',
    avatar: null,
  });

  const [validate, setValidate] = useState<TypeValidateAutorizationPage>({
    validName: false,
    validEmail: false,
    validPassword: false,
    validAvatar: null,
  });

  const handerSubmitForm = () => {
    if (!validate.validPassword) {

      return;
    }

    if (!validate.validEmail) {
      return;
    }

    if (!validate.validName) {
      return;
    }

    if (validate.validAvatar === false) {
      return;
    }

    dispatch(registrationUser(formData));
  };

  useEffect(() => {
    if (registrationStatus === RegistrationStatus.SUCCESSFULLY) {
      setFormData({
        name: '',
        email: '',
        password: '',
        avatar: null,
      });

      setValidate({
        validName: false,
        validEmail: false,
        validPassword: false,
        validAvatar: null,
      });
    }
  }, [registrationStatus]);

  return (
    <main>
      <section className="register-page">
        <div className="register-page__header">
          <div className="register-page__img-wrap">
            <img className="register-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." />
          </div>
        </div>
        <div className="register-page__content">
          <div className="register-page__inner">
            <h1 className="register-page__title">Регистрация</h1>
            <div className="register-page__form">
              <form action="#" method="post" autoComplete="off">
                <div className="register-page__fields " >
                  <NameComponents validate={validate} formData={formData} regexpName={regexpName} setValidate={setValidate} setFormData={setFormData} />
                  <MailComponent validate={validate} formData={formData} regexpEmail={regexpEmail} setValidate={setValidate} setFormData={setFormData} />
                  <PasswordComponent validate={validate} formData={formData} regexpPassword={regexpPassword} setValidate={setValidate} setFormData={setFormData} />
                  <AvatarComponent validate={validate} formData={formData} setFormData={setFormData} setValidate={setValidate} />
                </div>
                <ButtonSubmit handerSubmitForm={handerSubmitForm} validate={validate} />
                <MessageComponent />
              </form>
            </div>
            <p className="register-page__text-wrap">Уже зарегистрированы?
              <Link className="register-page__link" to={AddressesRoute.LogIn}>
                Войдите
              </ Link> в свой аккаунт.
            </p>
          </div>
        </div>
      </section>
    </main >
  );
}
