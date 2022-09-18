import axiosInstance from "../../api/setup";
import GiphyCard from "../../models/GiphyCard";
import IGiphyService from "./IGiphyService";
import DataStorageService from "../DataStorageService/DataStorageService";
import config from "./../../data/api-setup.json";

const giphySearchService: IGiphyService = {
  search: async (searchText: string, offset = 0): Promise<GiphyCard[]> => {
    const response = await axiosInstance.get("search", {
      params: {
        q: searchText,
        offset: offset * config.limit,
      },
    });

    if (searchText !== DataStorageService.getItem("search_text")) {
      DataStorageService.setItem(
        "item_count",
        response.data.pagination.total_count
      );
    }

    DataStorageService.setItem("search_text", searchText);

    return Promise.resolve(toGiphyCardDTO(response.data.data));
  },
};

const toGiphyCardDTO = (cards: any[]): GiphyCard[] => {
  return cards.map<GiphyCard>((card) => ({
    id: card.id,
    rating: card.rating,
    title: card.title,
    url: card.images.original.url,
  }));
};

export default giphySearchService;
