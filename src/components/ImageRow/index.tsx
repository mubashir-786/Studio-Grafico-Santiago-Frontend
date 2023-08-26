import sym from "@/assets/images/sym.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ImageRow() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src={sym}
          alt="img"
          style={{
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
      <Box
        sx={{
          height: "1px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          marginTop: "10px",
          marginBottom: "12px",
        }}
      />
    </Box>
  );
}
