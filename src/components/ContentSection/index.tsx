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
      <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
        <Image
          src={content}
          alt="content"
          style={{ width: "100%", height: "100vh" }}
        />
        <Box
          sx={{
            padding: "79px 110px 80px 80px",
            width: "35%",
            height: "530px",
            backgroundColor: "black",
            position: "absolute",
            top: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            left: "50px",
          }}
        >
          <Typography sx={{ fontSize: "32px", color: "white" }}>
            An online lab forging splendid{" "}
            <span style={{ color: "#E73E7E" }}>moments</span> .
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#6F6F6F", marginTop: "10px" }}
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
          paddingX: "50px",
          paddingY: "100px",
          backgroundColor: "#F7F7F7",
        }}
      >
        <Box sx={{ width: "30%" }}>
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
          sx={{ display: "flex", width: "70%", justifyContent: "space-evenly" }}
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
