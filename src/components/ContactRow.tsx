import { Box, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  heading: String;
  text: String;
  image: string | StaticImport;
  isLine?: boolean;
};

const ContactRow = ({ heading, text, image, isLine = true }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image src={image} alt="img" />
        <Box sx={{ marginLeft: "30px" }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "500",
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{ color: "#6F6F6F", fontSize: { xs: "12px", md: "16px" } }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "1px",
          width: "100%",
          backgroundColor: isLine ? "#6F6F6F" : "transparent",
          marginY: {
            xs: "10px",
            sm: "10px",
            md: "20px",
            lg: "40px",
            xl: "40px",
          },
        }}
      />
    </Box>
  );
};

export default ContactRow;
