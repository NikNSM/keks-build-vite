import { TypeFormLogInPage, TypeValidateLogInPage } from '../login-page';

type TypePasswordInputComponentProps = {
  validate: TypeValidateLogInPage;
  formData: TypeFormLogInPage;
  regexpPassword: RegExp;
  setValidate: (value: React.SetStateAction<TypeValidateLogInPage>) => void;
  setFormData: (value: React.SetStateAction<TypeFormLogInPage>) => void;
}

export default function PasswordInputComponent({ validate, formData, regexpPassword, setValidate, setFormData }: TypePasswordInputComponentProps): JSX.Element {
  const classValide = validate.validPassword ? 'custom-input is-valid register-page__field' : 'custom-input is-invalid register-page__field';

  const handlerInputPassword = (value: string) => {
    setValidate({
      ...validate,
      validPassword: regexpPassword.test(value)
    });
    setFormData({
      ...formData,
      password: value
    });

  };
  return (
    <div className={classValide}>
      <label><span className="custom-input__label">Введите ваш пароль</span>
        <input
          type="password"
          name="user-password-1"
          placeholder="Пароль"
          value={formData.password}
          onInput={(evt) => {
            handlerInputPassword(evt.currentTarget.value);
          }}
          required
        />
      </label>
    </ div>
  );
}
