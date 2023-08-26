import book from "@/assets/book.png";
import content from "@/assets/sectionbg.png";
import video from "@/assets/videosec.png";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
export default function VideoSection() {
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
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box
            sx={{
              padding: { xs: "20px", lg: "79px 110px 80px 80px" },
              width: { xs: "90%", sm: "70%", md: "50%" },
              height: { xs: "auto", md: "530px" },
              // position: "absolute",
              // top: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              margin: { xs: "auto", md: "0px" },
              // left: "50px",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "16px", md: "32px" }, color: "white" }}
            >
              An online lab forging{" "}
              <span style={{ color: "#E73E7E" }}>splendid moments</span> .
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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
              About Company
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              gap: { xs: "2px", lg: "10px" },
              display: "flex",
              height: { xs: "auto", md: "530px" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={video}
              className="w-[130px] md:w-[200px] lg:w-[240px] xl:w-[290px] h-[150px] md:h-[270px] lg:h-[330px] xl:h-[370px]"
              alt="video"
            />
            <Image
              src={book}
              className="w-[130px] md:w-[200px] lg:w-[240px] xl:w-[290px] h-[150px] md:h-[270px] lg:h-[330px] xl:h-[370px]"
              alt="book"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
