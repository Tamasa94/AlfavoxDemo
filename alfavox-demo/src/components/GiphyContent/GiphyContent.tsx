import React from "react";
import giphySearchService from "../../services/GiphyService/GiphyService";
import GiphyCard from "../GiphyCard/GiphyCard";
import GiphyContentProps from "./GiphyContentProps";
import * as Styled from "./style";

const GiphyContent = ({ items }: GiphyContentProps) => {
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
