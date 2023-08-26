"use client";
import dot from "@/assets/images/dot.png";
import img from "@/assets/section1.png";
import ContactUsPageForm from "@/components/ContactUsPage";
import InputComponent from "@/components/InputComponent";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState<any>(1);
  const [navWidth, setNavWidth] = useState("0%");
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
    },
  ];
  const openNav = () => {
    setNavWidth("100%");
  };

  const closeNav = () => {
    setNavWidth("0%");
  };
  const tabs = [
    { id: 1, text: "ALL" },
    { id: 2, text: "BRANDING" },
    { id: 3, text: "ADVERTISING" },
    { id: 4, text: "DESIGN" },
    { id: 5, text: "WEB" },
    { id: 6, text: "PHOTOGRAPHY" },
  ];

  return (
    <Box>
      <div id="myNav" style={{ width: navWidth }} className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">
          <Link href={"/"}>Home</Link>
          <Link href={"/services"}>Service</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>
      <Box
        sx={{
          paddingY: "20px",
          width: "60px",
          paddingX: { xs: "20px", md: "0px" },
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          position: "absolute",
          top: "1px",
          right: "1px",
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
      <Image
        src={img}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "300px",
        }}
        alt="img"
      />
      <Box
        sx={{
          height: "66px",
          width: "100%",
          border: "1px solid lightgrey",
          marginTop: "-8px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "150px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: { xs: "50px", sm: "100px", md: "150px" },
          }}
        >
          <Typography sx={{ color: "#6F6F6F" }}>Home</Typography>
          <Image src={dot} alt="img" />
          <Typography sx={{ color: "#6F6F6F" }}>Contact us</Typography>
        </Box>
      </Box>

      <ContactUsPageForm />
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          marginBottom: "30px",
          backgroundColor: "lightgrey",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Google Map Here
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "156px",
          backgroundColor: "black",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box
            sx={{ width: "3px", height: "65px", backgroundColor: "white" }}
          ></Box>
          <Box>
            <Typography
              sx={{ color: "white", fontSize: { xs: "22px", md: "30px" } }}
            >
              Join Our Mailing List
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { xs: "14px", md: "16px" } }}
            >
              For receiving our news and updates in your inbox directly.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <InputComponent
            onChange={(e) => {}}
            sx={{
              width: { xs: "180px", md: "400px" },
              borderTopLeftRadius: "15px",
            }}
            placeholder="Your Email Address"
          />
          <Box
            sx={{
              backgroundColor: "#1C1C1C",
              color: "white",
              height: "60px",
              padding: "20px",
            }}
          >
            SIGN UP
          </Box>
        </Box>
      </Box>
      {/* <GoogleMapReact 
      style={{ height: `300px` }}
      defaultZoom={10}
      resetBoundsOnResize={true}
      defaultCenter={{ lat: 47.36667, lng: 8.55 }}
    /> */}
      {/* <Box
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
      </Box> */}
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
