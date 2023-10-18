import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { LibraryAddCheckOutlined } from "@mui/icons-material";

export default function FeatureCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <LibraryAddCheckOutlined></LibraryAddCheckOutlined>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            lorems
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in
            nemo? Eos repellendus sed harum dolores ipsum sapiente natus amet
            perspiciatis cupiditate architecto, eveniet nam ullam possimus non
            ducimus quisquam.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
