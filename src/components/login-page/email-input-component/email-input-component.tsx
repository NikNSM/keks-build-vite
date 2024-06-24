import { TypeValidateLogInPage, TypeFormLogInPage } from '../login-page';

type TypeMailInputComponentProps = {
  validate: TypeValidateLogInPage;
  formData: TypeFormLogInPage;
  regexpEmail: RegExp;
  setValidate: (value: React.SetStateAction<TypeValidateLogInPage>) => void;
  setFormData: (value: React.SetStateAction<TypeFormLogInPage>) => void;
}

export default function EmailInputComponent({ validate, formData, regexpEmail, setFormData, setValidate }: TypeMailInputComponentProps): JSX.Element {

  const classValide = validate.validEmail ? 'custom-input is-valid register-page__field' : 'custom-input is-invalid register-page__field';

  const handlerInputMail = (value: string) => {
    setValidate({
      ...validate,
      validEmail: regexpEmail.test(value)
    });
    setFormData({
      ...formData,
      email: value
    });
  };

  return (
    <div className={classValide}>
      <label><span className="custom-input__label">Введите вашу почту</span>
        <input
          type="email"
          name="user-mail-1"
          placeholder="Почта"
          value={formData.email}
          onInput={(evt) => {
            handlerInputMail(evt.currentTarget.value);
          }}
          required
        />
      </label>
    </div>
  );
}

