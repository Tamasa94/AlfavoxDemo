import React, { useEffect, useState } from "react";
import DataStorageService from "../../services/DataStorageService/DataStorageService";
import giphySearchService from "../../services/GiphyService/GiphyService";
import ContentPagination from "../../components/ContentPagination/ContentPagination";
import GiphyContent from "../../components/GiphyContent/GiphyContent";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProgressWrapper from "../../components/Utils/ProgressWrapper/ProgressWrapper";
import * as Styled from "./style";
import GiphyCardPreview from "../../models/GiphyCardPreview";
import Navigation from "../../components/Utils/Navigation/Navigation";

const SearchPage = () => {
  const [giphs, setGiphs] = useState<GiphyCardPreview[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchText = DataStorageService.getItem("search_text");

    if (searchText) {
      OnSubmit(searchText);
    }
  }, []);

  const OnSubmit = async (searchText: string, offset?: number) => {
    try {
      setLoading(true);
      const giphys = await giphySearchService.search(searchText, offset);
      setGiphs(giphys);
    } catch (ex) {
      console.log("Giphy API Error");
    } finally {
      setLoading(false);
    }
  };

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    const searchText = DataStorageService.getItem("search_text") as string;

    OnSubmit(searchText, page - 1);
  };

  const itemCount = Number(DataStorageService.getItem("item_count"));

  return (
    <Styled.AppContainer>
      <Navigation>
        <SearchBar eventHandlers={{ OnSubmit }} initSearchText={DataStorageService.getItem("search_text")} />
      </Navigation>

      {giphs?.length > 0 && (
        <ContentPagination onChangePage={onChangePage} itemCount={itemCount} />
      )}
      <ProgressWrapper loading={loading}>
        <GiphyContent items={giphs} onChangePage={onChangePage} />
      </ProgressWrapper>
    </Styled.AppContainer>
  );
};

export default SearchPage;
