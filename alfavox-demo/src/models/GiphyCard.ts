import { Rating } from "../enums/rating";

export default interface GiphyCard {
  id: number;
  url: string;
  rating: Rating;
  title: string;
}
