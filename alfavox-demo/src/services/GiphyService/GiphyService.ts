import axiosInstance from "../../api/setup";
import GiphyCard from "../../models/GiphyCard";
import IGiphyService from "./IGiphyService";
import DataStorageService from "../DataStorageService/DataStorageService";
import config from "./../../data/api-setup.json";
import GiphyCardPreview from "../../models/GiphyCardPreview";

const giphySearchService: IGiphyService = {
  search: async (
    searchText: string,
    offset = 0
  ): Promise<GiphyCardPreview[]> => {
    const response = await axiosInstance.get("search", {
      params: {
        q: searchText,
        offset: offset * config.limit,
        lang: "en",
        limit: config.limit,
      },
    });

    if (searchText !== DataStorageService.getItem("search_text")) {
      DataStorageService.setItem(
        "item_count",
        response.data.pagination.total_count
      );
    }

    DataStorageService.setItem("search_text", searchText);

    return Promise.resolve(toGiphyCardPreviewDTO(response.data.data));
  },
  searchById: async (id: string): Promise<GiphyCard> => {
    const response = await axiosInstance.get(`${id}`);

    return Promise.resolve(toGiphyCardDTO(response.data.data));
  },
};

const toGiphyCardPreviewDTO = (cards: any[]): GiphyCardPreview[] => {
  return cards.map<GiphyCardPreview>((card) => ({
    id: card.id,
    url: card.images.original.url,
  }));
};

const toGiphyCardDTO = (card: any): GiphyCard => {
  return {
    id: card.id,
    rating: card.rating,
    title: card.title,
    url: card.images.original.url,
  } as GiphyCard;
};

export default giphySearchService;
