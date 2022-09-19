import GiphyCardPreview from "../../models/GiphyCardPreview";

export default interface GiphyContentProps {
  items: GiphyCardPreview[];
  onChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}
