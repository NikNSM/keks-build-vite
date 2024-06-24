import { TypeValidateAutorizationPage, TypeFormAutorizationPage } from '../autorization-page';
import { MAX_SIZE_IMAGE_AVATAR } from '../../../const';

type TypeAvatarComponentProps = {
  validate: TypeValidateAutorizationPage;
  formData: TypeFormAutorizationPage;
  setValidate: (value: React.SetStateAction<TypeValidateAutorizationPage>) => void;
  setFormData: (value: React.SetStateAction<TypeFormAutorizationPage>) => void;
}

export default function AvatarComponent({ validate, formData, setValidate, setFormData }: TypeAvatarComponentProps): JSX.Element {
  const classValide = validate.validAvatar === true ? 'custom-input is-valid register-page__field' : 'custom-input is-invalid register-page__field';

  const handlerChangeAvatar = (value: HTMLInputElement) => {
    if (value.files === null) {
      return;
    }
    const image = value.files[0];
    if (image === undefined) {
      setFormData({
        ...formData,
        avatar: null
      });
      return;
    }

    if (image.size > MAX_SIZE_IMAGE_AVATAR) {
      setValidate({
        ...validate,
        validAvatar: false,
      });

      setFormData({
        ...formData,
        avatar: image,
      });
      return;
    }

    setValidate({
      ...validate,
      validAvatar: true
    });

    setFormData({
      ...formData,
      avatar: image,
    });
  };

  return (
    <div className={classValide}>
      <label><span className="custom-input__label ">Введите ваше имя</span>
        <input
          type="file"
          name="user-name-1"
          data-text={formData.avatar ? formData.avatar.name : 'Аватар'}
          accept="image/png, .jpg"
          onChange={(evt) => {
            handlerChangeAvatar(evt.currentTarget);
          }}
        />
      </label>
    </div>
  );
}
