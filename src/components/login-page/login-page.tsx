import { AddressesRoute, AutorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EmailInputComponent from './email-input-component/email-input-component';
import PasswordInputComponent from './password-imput-component/password-input-component';
import ButtonSubmitComponent from './button-submit-component/button-submit-component';
import MessageComponent from './message-component/message-component';
import { useAppDispatch, useAppSelector } from '../../utils';
import { autorizationUser } from '../../store/users-slice/api-action';

export type TypeValidateLogInPage = {
  validEmail: boolean;
  validPassword: boolean;
}

export type TypeFormLogInPage = {
  email: string;
  password: string;
}

export default function LogInPage(): JSX.Element {
  const regexpPassword = /^\w*([a-z]+\d+|\d+[a-z]+)+\w*$/i;
  const regexpEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+).\w{2,3}$/i;

  const dispatch = useAppDispatch();
  const autorizationStatus = useAppSelector((state) => state.user.status);

  const [formData, setFormData] = useState<TypeFormLogInPage>({
    email: '',
    password: '',
  });

  const [validate, setValidate] = useState<TypeValidateLogInPage>({
    validEmail: false,
    validPassword: false,
  });

  const handerSubmitForm = () => {
    if (!validate.validPassword) {
      return;
    }

    if (!validate.validEmail) {
      return;
    }

    dispatch(autorizationUser(formData));
  };

  useEffect(() => {
    if (autorizationStatus === AutorizationStatus.AUTORIZATION) {
      setFormData({
        email: '',
        password: '',
      });

      setValidate({
        validEmail: false,
        validPassword: false,
      });
    }
  }, [autorizationStatus]);

  return (
    <main>
      <section className="login-page">
        <div className="login-page__header">
          <div className="login-page__img-wrap">
            <img className="login-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." />
          </div>
        </div>
        <div className="login-page__content">
          <div className="login-page__inner">
            <h1 className="login-page__title">Вход</h1>
            <div className="login-page__form">
              <form action="#" method="post" autoComplete="off">
                <div className="login-page__fields">
                  <EmailInputComponent validate={validate} formData={formData} setFormData={setFormData} setValidate={setValidate} regexpEmail={regexpEmail} />
                  <PasswordInputComponent validate={validate} formData={formData} setFormData={setFormData} setValidate={setValidate} regexpPassword={regexpPassword} />
                </div>
                <ButtonSubmitComponent validate={validate} handerSubmitForm={handerSubmitForm} />
                <MessageComponent />
              </form>
            </div>
            <p className="login-page__text-wrap">Ещё не зарегистрированы?
              <Link className="login-page__link" to={AddressesRoute.SignUp}>Создайте</ Link> аккаунт прямо сейчас.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
