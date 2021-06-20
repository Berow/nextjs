import cn from 'classnames';
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';

const generateKey = (pre: number) => {
  return `${pre}_${new Date().getTime()}`;
};

export const Rating = (
  { isEditable = false, error, rating, setRating, ...props }: RatingProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const [ratingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    // eslint-disable-next-line
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        // eslint-disable-next-line
        <span
          key={generateKey(i)}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          /* eslint-disable */
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          /* eslint-enable */
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            // eslint-disable-next-line
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });
    setRaitingArray(updatedArray);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    setRating(i);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={generateKey(i)}>{r}</span>
      ))}
    </div>
  );
};
