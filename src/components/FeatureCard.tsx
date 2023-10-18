import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { LibraryAddCheckOutlined } from "@mui/icons-material";
import { FeatureProps } from "@/types";

export default function FeatureCard({
  featureName,
  featureDescription,
}: FeatureProps) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "#00FF43",
        color: "#112A46",
        height: "auto", //
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <LibraryAddCheckOutlined></LibraryAddCheckOutlined>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={700}
          >
            {featureName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {featureDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
