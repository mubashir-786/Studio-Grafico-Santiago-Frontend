import branding from "@/assets/branding.png";
import content from "@/assets/content.png";
import privacy from "@/assets/privacy.png";
import superb from "@/assets/super.png";
import technology from "@/assets/technology.png";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
export default function ContentSection() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={content}
          alt="content"
          style={{ width: "100%", height: "100vh" }}
        />
        <Box
          sx={{
            padding: { xs: "20px", lg: "79px 110px 80px 80px" },
            width: { xs: "60%", md: "35%" },
            height: { xs: "auto", md: "530px" },
            backgroundColor: "black",
            position: "absolute",
            // top: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            left: "50px",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "16px", md: "32px" }, color: "white" }}
          >
            An online lab forging splendid{" "}
            <span style={{ color: "#E73E7E" }}>moments</span> .
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              color: "#6F6F6F",
              marginTop: "10px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
          <Button
            sx={{
              marginTop: "40px",
              color: "black",
              backgroundColor: "white",
              borderRadius: "0px",
              fontSize: "11px",
              padding: " 6px 26.09px 6px 26px",
              ":hover": { color: "black", backgroundColor: "white" },
            }}
          >
            Explore services
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          paddingX: "50px",
          paddingY: "100px",
          backgroundColor: "#F7F7F7",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
          <Typography sx={{ fontSize: "20px" }}>
            We <span style={{ color: "#E73E7E" }}>combine</span> design and
            thinking and technical craft.
          </Typography>
          <Typography
            sx={{ color: "#6F6F6F", fontSize: "14px", marginTop: "5px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "70%", lg: "55%" },
            justifyContent: "space-around",
            marginLeft: { xs: "0px", lg: "50px" },
            flexWrap: "wrap",
            marginTop: { xs: "40px", md: "0px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={branding} alt={"hell"} />
            <Typography sx={{ color: "#6F6F6F", fontFamily: "14px" }}>
              Branding
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={privacy} alt={"hell"} />
            <Typography sx={{ color: "#6F6F6F", fontFamily: "14px" }}>
              Innovation
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={technology} alt={"hell"} />
            <Typography sx={{ color: "#6F6F6F", fontFamily: "14px" }}>
              Technology
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={superb} alt={"hell"} />
            <Typography sx={{ color: "#6F6F6F", fontFamily: "14px" }}>
              Superiority
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
