import { Rating } from "../enums/rating";
import GiphyCardPreview from "./GiphyCardPreview";

export default interface GiphyCard extends GiphyCardPreview {
  rating: Rating;
  title: string;
}
