import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  heading: string;
  text: string;
  imgPath: string | StaticImport;
};

export default function ServiceTopSection({ heading, text, imgPath }: Props) {
  return (
    <Box sx={{ marginX: "20px", marginTop: { xs: "20px", md: "0px" } }}>
      <Image
        src={imgPath}
        alt="img"
        style={{
          objectFit: "cover",
          width: "350px",
          height: "200px",
        }}
      />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "14px",
          marginTop: "30px",
          marginBottom: "10px",
        }}
      >
        {/* E-COMMERCE SOLUTIONS */}
        {heading}
      </Typography>
      <Typography sx={{ fontSize: "14px" }}>
        {text}
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s */}
      </Typography>
      <Box
        sx={{
          height: "1px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          marginTop: "20px",
        }}
      />
    </Box>
  );
}
