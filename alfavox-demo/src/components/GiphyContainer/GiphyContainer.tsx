import React, { useState } from "react";
import GiphyCard from "../../models/GiphyCard";
import DataStorageService from "../../services/DataStorageService/DataStorageService";
import giphySearchService from "../../services/GiphyService/GiphyService";
import ContentPagination from "../ContentPagination/ContentPagination";
import GiphyContent from "../GiphyContent/GiphyContent";
import SearchBar from "../SearchBar/SearchBar";
import ProgressWrapper from "../Utils/ProgressWrapper/ProgressWrapper";
import GiphyContainerProps from "./GiphyContainerProps";
import * as Styled from "./style";

const GiphyContainer = ({}: GiphyContainerProps) => {
  const [giphs, setGiphs] = useState<GiphyCard[]>([]);
  const [loading, setLoading] = useState(false);

  const OnSubmit = async (searchText: string, offset? : number) => {
    try {
      setLoading(true);
      const giphys = await giphySearchService.search(searchText,offset);
      setGiphs(giphys);
    } catch (ex) {
      console.log("Giphy API Error");
    } finally {
      setLoading(false);
    }
  };

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(page);
    const searchText = DataStorageService.getItem("search_text") as string;
    
    OnSubmit(searchText, page - 1);
  };

  const itemCount = Number(DataStorageService.getItem("item_count"));



  return (
    <Styled.AppContainer>
      <SearchBar eventHandlers={{ OnSubmit }} />
      {giphs?.length > 0 &&<ContentPagination onChangePage={onChangePage} itemCount={itemCount} /> }
      <ProgressWrapper loading={loading}>
        <GiphyContent items={giphs} onChangePage={onChangePage} />
      </ProgressWrapper>
    </Styled.AppContainer>
  );
};

export default GiphyContainer;
