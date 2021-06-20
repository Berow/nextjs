export type RatingProps = {
  isEditable?: boolean;
  rating: number;
  error?: string;
  setRating?: (raiting: number) => void;
};
