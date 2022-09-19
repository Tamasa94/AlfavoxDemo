import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import GiphyCardDetailsProps from "./GiphyCardProps";

const GiphyCardDetails = ({
  item: { rating, title, url },
}: GiphyCardDetailsProps) => {
  return (
    <Card sx={{ maxWidth: 450, minWidth: 450, margin: "20px auto" }}>
      <CardMedia component="img" alt={title} height="250" image={url} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
         <Typography variant="body1" color="text.secondary">
           Rating: {rating}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GiphyCardDetails;
