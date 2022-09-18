import GiphyCard from "../../models/GiphyCard";

export default interface GiphyContentProps {
  items: GiphyCard[];
  onChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}
