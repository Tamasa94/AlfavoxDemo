import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import GiphyCardDetails from "../../components/GiphyCardDetails/GiphyCardDetails";
import Navigation from "../../components/Utils/Navigation/Navigation";
import GiphyCard from "../../models/GiphyCard";
import giphySearchService from "../../services/GiphyService/GiphyService";
import * as Styled from "./style";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Typography } from "@mui/material";

const CardPage = () => {
  const [giphyItem, setGiphyItem] = useState<GiphyCard>({} as GiphyCard);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const item = await giphySearchService.searchById(id as string);
      setGiphyItem(item);
    })();
  }, [id]);

  return (
    <Styled.CardPageWrapper>
      <Navigation>
        <Link to="/" style={{textDecoration: "none"}}>
          <Styled.NavigationContentWrapper>
            <KeyboardBackspaceOutlinedIcon />
            <Typography variant="subtitle2">To Home Page</Typography>
          </Styled.NavigationContentWrapper>
        </Link>
      </Navigation>
      <GiphyCardDetails item={giphyItem} />
    </Styled.CardPageWrapper>
  );
};

export default CardPage;
