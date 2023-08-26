"use client";
import img2 from "@/assets/images/Item-1.png";
import img3 from "@/assets/images/Item-2.png";
import img4 from "@/assets/images/Item-3.png";
import img5 from "@/assets/images/Item-4.png";
import img6 from "@/assets/images/Item-5.png";
import img9 from "@/assets/images/Item-8.png";
import img1 from "@/assets/images/Item.png";
import dot from "@/assets/images/dot.png";
import img from "@/assets/images/section.png";
import ContactForm from "@/components/ContactForm";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img10 from "../../assets/images/Item-9.png";

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState<any>(1);
  const [navWidth, setNavWidth] = useState("0%");
  const itemData = [
    {
      img: img1,
      title: "Bed",
      cols: 1,
      row: 1,
    },
    {
      img: img2,
      title: "Books",
      cols: 2,
      row: 2,
    },
    {
      img: img3,
      cols: 1,
      row: 1,
      title: "Sink",
    },
    {
      img: img4,
      cols: 1,
      row: 1,
      title: "Kitchen",
    },
    {
      img: img5,
      cols: 1,
      row: 1,
      title: "Blinds",
    },
    {
      img: img5,
      cols: 1,
      row: 1,
      title: "Chairs",
    },
    {
      img: img6,
      cols: 1,
      row: 2,
      title: "Laptop",
    },
    {
      img: img9,
      cols: 1,
      row: 1,
      title: "Doors",
    },
    {
      img: img5,
      cols: 1,
      row: 1,
      title: "Coffee",
    },
    {
      img: img10,
      cols: 1,
      row: 1,
      title: "Storage",
    },
  ];
  const tabs = [
    { id: 1, text: "ALL" },
    { id: 2, text: "BRANDING" },
    { id: 3, text: "ADVERTISING" },
    { id: 4, text: "DESIGN" },
    { id: 5, text: "WEB" },
    { id: 6, text: "PHOTOGRAPHY" },
  ];
  const openNav = () => {
    setNavWidth("100%");
  };

  const closeNav = () => {
    setNavWidth("0%");
  };
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
          <Typography sx={{ color: "#6F6F6F" }}>Portfolio</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginY: "70px",
          flexWrap: "wrap",
        }}
      >
        {tabs.map((item) => {
          return (
            <Typography
              onClick={() => {
                setSelectedTab(item.id);
              }}
              sx={{
                marginX: "10px",
                cursor: "pointer",
                textDecoration: selectedTab == item.id ? "underline" : "none",
              }}
            >
              {item.text}
            </Typography>
          );
        })}
      </Box>

      <Box
        sx={{
          width: "95%",
          margin: "auto",
          marginBottom: { xs: "30px", lg: "60px" },
        }}
      >
        <ImageList cols={4} gap={8}>
          {itemData.map((item, i) => (
            <ImageListItem key={i} rows={item.row}>
              <Image
                src={item.img}
                alt={item.title}
                style={{ objectFit: "contain" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
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
