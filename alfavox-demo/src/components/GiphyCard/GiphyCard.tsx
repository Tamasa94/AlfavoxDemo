import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import GiphyCardProps from "./GiphyCardProps";

const GiphyCard = ({ title, url }: GiphyCardProps) => {
  return (
    <Card sx={{ maxWidth: 245, minWidth: 245 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={url} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GiphyCard;
