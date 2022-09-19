import GiphyCard from "../../models/GiphyCard";
import GiphyCardPreview from "../../models/GiphyCardPreview";

export default interface IGiphyService {
  search: (searchText: string, offset?: number) => Promise<GiphyCardPreview[]>;
  searchById: (id: string) => Promise<GiphyCard>;
}
