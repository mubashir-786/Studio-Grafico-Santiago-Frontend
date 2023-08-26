import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  heading: string;
  text: string;
  imgPath: string | StaticImport;
};

export default function SectionComponent({ heading, text, imgPath }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Image src={imgPath} alt="img" />
      <Box sx={{ marginLeft: "12px", paddingX: "20px" }}>
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          {heading}
        </Typography>
        <Typography sx={{ color: "white", fontSize: "14px", marginTop: "5px" }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
