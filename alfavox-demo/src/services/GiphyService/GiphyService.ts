import axiosInstance from "../../api/setup";
import GiphyCard from "../../models/GiphyCard";
import IGiphyService from "./IGiphyService";

const giphySearchService: IGiphyService = {
  search: async (searchText: string): Promise<GiphyCard[]> => {
    const response = await axiosInstance.get("search", {
      params: {
        q: searchText,
      },
    });

    return Promise.resolve(toGiphyCardDTO(response.data.data));
  },
};

const toGiphyCardDTO = (cards: any[]): GiphyCard[] => {
  return cards.map<GiphyCard>((card) => ({
    id: card.id,
    rating: card.rating,
    title: card.title,
    url: card.url,
  }));
};

export default giphySearchService;
