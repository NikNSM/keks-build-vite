import { TypeValidateAutorizationPage, TypeFormAutorizationPage } from '../autorization-page';

type TypeMailComponentProps = {
  validate: TypeValidateAutorizationPage;
  formData: TypeFormAutorizationPage;
  regexpEmail: RegExp;
  setValidate: (value: React.SetStateAction<TypeValidateAutorizationPage>) => void;
  setFormData: (value: React.SetStateAction<TypeFormAutorizationPage>) => void;
}


export default function MailComponent({ validate, formData, regexpEmail, setValidate, setFormData }: TypeMailComponentProps): JSX.Element {
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
