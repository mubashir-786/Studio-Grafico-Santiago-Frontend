import img1 from "@/assets/side1.png";
import img2 from "@/assets/side2.png";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        height: "500px",
        marginX: "auto",
        gap: "40px",
        marginY: "80px",
      }}
    >
      <Box sx={{ display: "flex", gap: "2px" }}>
        <Image src={img1} alt="img" />
        <Image src={img2} alt="img2" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
          Design, thought, and{" "}
          <span style={{ color: "#E73E7E" }}>skill unite</span>.
        </Typography>
        <Typography sx={{ fontWeight: "400", fontSize: "20px" }}>
          Devoted to clients and their businesses. 100% guaranteed delivery with
          instant and responsive support.
        </Typography>
        <Typography sx={{ fontSize: "14px ", fontWeight: "400" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since. Lorem Ipsum has been the industry. Lorem Ipsum has been the
          industry’s standard dummy text since.
        </Typography>
        <Button
          sx={{
            marginTop: "40px",
            color: "white",
            backgroundColor: "#232323",
            borderRadius: "0px",
            fontSize: "11px",
            padding: " 6px 26.09px 6px 26px",
            ":hover": { color: "white", backgroundColor: "#232323" },
            width: "160px",
          }}
        >
          About Company
        </Button>
      </Box>
    </Box>
  );
}
