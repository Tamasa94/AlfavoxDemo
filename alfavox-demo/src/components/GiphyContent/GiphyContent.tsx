import React from "react";
import GiphyCard from "../GiphyCard/GiphyCard";
import GiphyContentProps from "./GiphyContentProps";
import * as Styled from "./style";

const GiphyContent = ({ items, onChangePage }: GiphyContentProps) => {
  return (
    <Styled.ContentWrapper>
      {items.map((giph) => (
        <GiphyCard
          id={giph.id}
          url={giph.url}
        />
      ))}
    </Styled.ContentWrapper>
  );
};

export default GiphyContent;
