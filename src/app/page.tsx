"use client";
import img from "@/assets/Hero-Banner.png";
import logo from "@/assets/bulb.png";
import ContactForm from "@/components/ContactForm";
import ContentSection from "@/components/ContentSection";
import FourIcon from "@/components/FourIcons";
import FourSection from "@/components/FourSection";
import HappyClient from "@/components/HappyClient";
import HeroSection from "@/components/HeroSection";
import { Img } from "@/components/IMG";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import { Text } from "@/components/Text";
import VideoSection from "@/components/VideoSection";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [navWidth, setNavWidth] = useState("0%");
  useEffect(() => {
    const eyeball = (event: MouseEvent) => {
      const eyes = document.querySelectorAll(".eyes");
      eyes.forEach((eye: any) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotate}deg)`;
      });
    };

    document.body.addEventListener("mousemove", eyeball);

    return () => {
      document.body.removeEventListener("mousemove", eyeball);
    };
  }, []);
  const openNav = () => {
    setNavWidth("100%");
  };

  const closeNav = () => {
    setNavWidth("0%");
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <div id="myNav" style={{ width: navWidth }} className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="overlay-content">
            <Link href={"/service"}>Service</Link>
            <Link href={"/portfolio"}>Portfolio</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
        <Box
          sx={{
            backgroundColor: "black",
            height: { xs: "10vh", md: "100vh" },
            width: { xs: "100%", md: "5%" },
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "26px", md: "51px" },
              height: { xs: "37px", md: "72px" },
            }}
          >
            <Image src={logo} alt="logo" style={{ objectFit: "fill" }} />
          </Box>
          <Typography
            sx={{
              rotate: { xs: "none", md: "-90deg" },
              color: "white",
              width: { xs: "auto", md: "280px" },
              fontSize: { xs: "14px", md: "20px" },
              whiteSpace: "nowrap",
            }}
          >
            STUDIO GRAFICO <span style={{ color: "#E73E7E" }}>SANTIAGO</span>
          </Typography>
          <Box
            sx={{
              borderTop: { xs: "none", md: "1px solid #DFDFDF" },
              borderLeft: { xs: "1px solid #DFDFDF", md: "none" },
              paddingY: "20px",
              width: { xs: "auto", md: "100%" },
              paddingX: { xs: "20px", md: "0px" },
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: "1",
            }}
            onClick={openNav}
          >
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="23" height="2" fill="#F2F2F2" />
              <rect y="8" width="23" height="2" fill="#F2F2F2" />
              <rect y="8" width="23" height="2" fill="#F2F2F2" />
              <rect y="16" width="23" height="2" fill="#F2F2F2" />
            </svg>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "95%" }, height: "100vh" }}>
          <Image
            src={img}
            alt="img"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "90%" },
              height: "100vh",
              position: "absolute",
              top: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="container"
              sx={{
                marginTop: "5px",
                marginBottom: "20px",
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="eyes"></div>
              <div className="eyes"></div>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "36px", md: "117px" },
                fontWeight: "800",
                marginBottom: "0px",
                lineHeight: { xs: "50px", md: "129px" },
                textAlign: "center",
              }}
            >
              START <span style={{ color: "#E73E7E" }}>CREATING.</span>
            </Typography>
            <Typography
              sx={{
                marginTop: "0px",
                fontSize: { xs: "9px", md: "19px" },
                letterSpacing: "5px",
                textAlign: "center",
              }}
            >
              PLANNING · <span style={{ color: "#E73E7E" }}>DESIGN</span> ·
              DEVELOPMENT
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
              }}
            >
              Get Quote
            </Button>
          </Box>
        </Box>
      </Box>
      <HeroSection />
      <FourSection />
      <HappyClient />
      <ContentSection />
      <Portfolio />
      <div className="flex flex-col font-lato items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start max-w-full  w-full ">
          <div className="flex flex-col items-start justify-start max-w-full md:px-10 sm:px-5 px-[30px] py-[130px] w-full">
            <div className="flex flex-col lg:flex-row gap-[20px] items-start justify-around max-w-full mx-auto w-full">
              {/* <List
                className="md:flex-1 sm:flex-col lg:flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 w-[100%] md:w-full"
                orientation="horizontal"
              > */}
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[29px] items-center justify-start w-full">
                  <div className="border border-blue_gray-100 border-solid flex flex-col h-[90px] items-center justify-start p-[26px] sm:px-5 rounded-md w-[90px]">
                    <Img
                      className="h-[35px] w-[33px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start">
                    <Text
                      className="text-sm md:text-base text-gray-900 whitespace-nowrap"
                      size="txtMontserratMedium16"
                    >
                      Advanced Grid
                    </Text>
                    <Text
                      className="text-gray-600 text-[12px] md:text-sm"
                      size="txtRobotoRegular14"
                    >
                      Subtitle
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[30px] items-center justify-start w-full">
                  <div className="border border-blue_gray-100 border-solid flex flex-col h-[90px] items-center justify-start p-[26px] sm:px-5 rounded-md w-[90px]">
                    <Img
                      className="h-[35px] w-[35px]"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-sm md:text-base text-gray-900 whitespace-nowrap"
                      size="txtMontserratMedium16"
                    >
                      Responsive Design
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-600 text-[12px] md:text-sm"
                      size="txtRobotoRegular14"
                    >
                      Subtitle
                    </Text>
                  </div>
                </div>
              </div>
              {/* </List> */}
              <div className="flex md:flex-1 flex-col items-start justify-start w-[100%] md:w-full">
                <div className="flex flex-row gap-[30px] items-center justify-start w-[100%] md:w-full">
                  <div className="border border-blue_gray-100 border-solid flex flex-col h-[90px] items-center justify-start p-6 sm:px-5 rounded-md w-[90px]">
                    <Img
                      className="h-7 md:h-[35px] my-0.5 w-10"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start  whitespace-nowrap">
                    <Text
                      className="text-sm md:text-base text-gray-900"
                      size="txtMontserratMedium16"
                    >
                      Top Performance
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-600 text-[12px] md:text-sm"
                      size="txtRobotoRegular14"
                    >
                      Subtitle
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Testimonial /> */}
        </div>
      </div>
      <VideoSection />
      <Testimonial />
      <FourIcon />
      <ContactForm />
      <Box
        sx={{
          width: "100%",
          height: "150px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%" },
            height: "150px",
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography sx={{ fontSize: { xs: "11px", md: "16px" } }}>
            <span style={{ color: "#E73E7E", marginRight: "5px" }}>
              © 2023 SGS is Proudly Powered by
            </span>
            TEAM V
          </Typography>
          <Typography
            sx={{ color: "#6F6F6F", fontSize: { xs: "11px", md: "16px" } }}
          >
            On social networks
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
