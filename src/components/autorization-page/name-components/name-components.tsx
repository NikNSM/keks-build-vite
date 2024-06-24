import { TypeValidateAutorizationPage, TypeFormAutorizationPage } from '../autorization-page';

type TypeNameComponentsProps = {
  validate: TypeValidateAutorizationPage;
  formData: TypeFormAutorizationPage;
  regexpName: RegExp;
  setValidate: (value: React.SetStateAction<TypeValidateAutorizationPage>) => void;
  setFormData: (value: React.SetStateAction<TypeFormAutorizationPage>) => void;
}

export default function NameComponents({ validate, formData, regexpName, setValidate, setFormData }: TypeNameComponentsProps): JSX.Element {
  const classValide = validate.validName ? 'custom-input is-valid register-page__field' : 'custom-input is-invalid register-page__field';

  const handlerInputName = (value: string) => {
    setValidate({
      ...validate,
      validName: regexpName.test(value)
    });
    setFormData({
      ...formData,
      name: value
    });
  };

  return (
    <div className={classValide}>
      <label><span className="custom-input__label">Введите ваше имя</span>
        <input
          type="text"
          name="user-name-1"
          placeholder="Имя"
          value={formData.name}
          onInput={(evt) => {
            handlerInputName(evt.currentTarget.value);
          }}
          required
        />
      </label>
    </div>
  );
}
