import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GiphyCardProps from "./GiphyCardProps";

const GiphyCard = ({ id, url }: GiphyCardProps) => {

  return (
    <Card sx={{ maxWidth: 245, minWidth: 245 }}>
      <Link key={id} to={`giphys/${id}`} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={url}
            alt={id.toString()}
          />
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default GiphyCard;
