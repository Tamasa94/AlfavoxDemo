import GiphyCard from "../../models/GiphyCard";

export default interface IGiphyService {
  search: (searchText: string) => Promise<GiphyCard[]>;
}
