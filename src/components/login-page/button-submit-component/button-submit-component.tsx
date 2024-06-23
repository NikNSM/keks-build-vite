import { TypeValidateLogInPage } from '../login-page';
import { useAppSelector } from '../../../utils';
type TypeButtonSubmitComponentProps = {
  validate: TypeValidateLogInPage;
  handerSubmitForm: () => void;
}

export default function ButtonSubmitComponent({ validate, handerSubmitForm }: TypeButtonSubmitComponentProps): JSX.Element {
  const loading = useAppSelector((state) => state.user.loading);
  const classButton = loading || !validate.validPassword || !validate.validEmail ? 'btn register-page__btn btn--large is-disabled' : 'btn register-page__btn btn--large';
  return (
    <button
      className={classButton}
      onClick={(evt) => {
        evt.preventDefault();
        handerSubmitForm();
      }}
      type="submit"
    >{loading ? <div className="loader" /> : 'Войти'}
    </ button>
  );
}
