import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";
import GiphyCard from "../../models/GiphyCard";
import giphySearchService from "../../services/GiphyService/GiphyService";
import SearchBar from "../SearchBar/SearchBar";
import GiphyContainerProps from "./GiphyContainerProps";
import * as Styled from "./style";

const GiphyContainer = ({}: GiphyContainerProps) => {
  const [giphs, setGiphs] = useState<GiphyCard[]>([]);
  const [loading, setLoading] = useState(false);

  const OnSubmit = async (searchText: string) => {
    try {
      setLoading(true);
      const giphys = await giphySearchService.search(searchText);
      setGiphs(giphys);
    } catch (ex) {
      console.log("Giphy API Error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Styled.AppContainer>
      <SearchBar eventHandlers={{ OnSubmit }} />
      {loading ? <CircularProgress /> : <GiphyContainer></GiphyContainer>}
    </Styled.AppContainer>
  );
};

export default GiphyContainer;
