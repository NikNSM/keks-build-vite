import { useAppSelector } from '../../../utils';
import { FormateDate } from '../../../const';
import { getDateFormate } from '../../../utils';

export default function LastReview(): JSX.Element {
  const lastReview = useAppSelector((state) => state.reviews.lastReview);

  if (lastReview === null) {
    return <div className="container" />;
  }

  const reatingStars = Array.from({ length: 5 }, (_star, index) => index + 1 <= lastReview.rating ? 'star-rating__star star-rating__star--active' : 'star-rating__star');

  return (
    <div className="container">
      <h2 className="last-review__title">последний отзыв</h2>
      <div className="review">
        <div className="review__inner-wrapper review__inner-wrapper--border">
          <time className="review__date" dateTime={getDateFormate(lastReview.isoDate, FormateDate.dateLastReviewTagDataTime)}>{getDateFormate(lastReview.isoDate, FormateDate.dateLastReview)}</time><span className="review__author">Уважаемый(-ая) {lastReview.user.name}</span>
          <div className="star-rating">
            {reatingStars.map((ratingStars, index) => (
              <svg key={`star-${index + 1}`} className={ratingStars} width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>))}
          </div>
          <div className="review__text-wrapper">
            <p className="review__text">{lastReview.positive}</p>
            <p className="review__text">{lastReview.negative}</p>
          </div>
          <div className="review__image-wrapper">
            <picture>
              <source type="image/webp" srcSet={lastReview.user.avatarUrl} /><img src={lastReview.user.avatarUrl} srcSet={lastReview.user.avatarUrl} width="162" height="162" alt="Кот" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );

}
