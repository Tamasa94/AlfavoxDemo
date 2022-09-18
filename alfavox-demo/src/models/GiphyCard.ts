import { Rating } from "../enums/rating";

export default interface GiphyCard {
  id: number | string;
  url: string;
  rating: Rating;
  title: string;
}
