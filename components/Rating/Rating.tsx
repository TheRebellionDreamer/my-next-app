import cn from 'classnames';
import { KeyboardEvent, useEffect, useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

function Rating({
  isEditable = false,
  rating,
  onChangeRating,
  ...props
}: RatingProps): JSX.Element {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r, i) => (
      <span
        key={i}
        onMouseEnter={changeDisplay(i + 1)}
        onMouseLeave={changeDisplay(rating)}
        onClick={handleClick(i + 1)}
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
      >
        <StarIcon
          onKeyDown={(event: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, event)}
          tabIndex={isEditable ? 0 : -1}
        />
      </span>
    ));
    setRatingArray(updatedArray);
  };

  const changeDisplay = (rating: number) => () => {
    if (!isEditable) {
      return;
    }
    constructRating(rating);
  };

  const handleClick = (rating: number) => () => {
    if (!isEditable || !onChangeRating) {
      return;
    }
    onChangeRating(rating);
  };

  const handleSpace = (rating: number, event: KeyboardEvent<SVGElement>) => {
    if (event.code !== 'Space' || !onChangeRating) {
      return;
    }
    onChangeRating(rating);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((rating, i) => (
        <span key={i}>{rating}</span>
      ))}
    </div>
  );
}

export default Rating;
