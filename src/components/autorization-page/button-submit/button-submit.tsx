import { TypeValidateAutorizationPage } from '../autorization-page';
import { useAppSelector } from '../../../utils';

type TypeButtonSubmitProps = {
  validate: TypeValidateAutorizationPage;
  handerSubmitForm: () => void;
}

export default function ButtonSubmit({ handerSubmitForm, validate }: TypeButtonSubmitProps): JSX.Element {
  const loading = useAppSelector((state) => state.user.loading);
  const classButton = loading || !validate.validName || !validate.validPassword || validate.validAvatar === false || !validate.validEmail ? 'btn register-page__btn btn--large is-disabled' : 'btn register-page__btn btn--large';

  return (
    <button className={classButton} type="submit"
      onClick={(evt) => {
        evt.preventDefault();
        handerSubmitForm();
      }}
    >{loading ? <div className="loader" /> : 'Зарегистрироваться'}
    </button>
  );
}
