import comp from "@/assets/comp.png";
import img from "@/assets/img.png";
import vallet from "@/assets/vallet.png";
import video from "@/assets/video.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
export default function FourSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box
          sx={{
            width: "130px",
            height: "130px",
            backgroundColor: "#f2f2f2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={comp} alt="comp" />
        </Box>
        <Box sx={{ width: "130px", textAlign: "center" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Discussion of the Idea
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#6F6F6F" }}
          >
            Lorem Ipsum is simply text of the printing and typesetting standard
            industry.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box
          sx={{
            width: "130px",
            height: "130px",
            backgroundColor: "#f2f2f2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={img} alt="img" />
        </Box>
        <Box sx={{ width: "130px", textAlign: "center" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Handcrafted Templates
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#6F6F6F" }}
          >
            Lorem Ipsum is simply text of the printing and typesetting standard
            industry.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box
          sx={{
            width: "130px",
            height: "130px",
            backgroundColor: "#f2f2f2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={video} alt="video" />
        </Box>
        <Box sx={{ width: "130px", textAlign: "center" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Testing for Perfection
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#6F6F6F" }}
          >
            Lorem Ipsum is simply text of the printing and typesetting standard
            industry.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box
          sx={{
            width: "130px",
            height: "130px",
            backgroundColor: "#f2f2f2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={vallet} alt="vallet" />
        </Box>
        <Box sx={{ width: "130px", textAlign: "center" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            Testing for Perfection
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#6F6F6F" }}
          >
            Lorem Ipsum is simply text of the printing and typesetting standard
            industry.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
