import { TypeValidateAutorizationPage, TypeFormAutorizationPage } from '../autorization-page';

type TypePasswordComponentProps = {
  validate: TypeValidateAutorizationPage;
  formData: TypeFormAutorizationPage;
  regexpPassword: RegExp;
  setValidate: (value: React.SetStateAction<TypeValidateAutorizationPage>) => void;
  setFormData: (value: React.SetStateAction<TypeFormAutorizationPage>) => void;
}

export default function PasswordComponent({ validate, formData, regexpPassword, setValidate, setFormData }: TypePasswordComponentProps): JSX.Element {
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
    </div>
  );
}
