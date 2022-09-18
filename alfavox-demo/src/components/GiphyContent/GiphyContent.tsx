import React from "react";
import DataStorageService from "../../services/DataStorageService/DataStorageService";
import ContentPagination from "../ContentPagination/ContentPagination";
import GiphyCard from "../GiphyCard/GiphyCard";
import GiphyContentProps from "./GiphyContentProps";
import * as Styled from "./style";

const GiphyContent = ({ items, onChangePage }: GiphyContentProps) => {
  return (
    <Styled.ContentWrapper>
      {items.map((giph) => (
        <GiphyCard
          id={giph.id}
          title={giph.title}
          rating={giph.rating}
          url={giph.url}
        />
      ))}
    </Styled.ContentWrapper>
  );
};

export default GiphyContent;
