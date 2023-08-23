"use client";
import dot from "@/assets/images/dot.png";
import img from "@/assets/images/section.png";
import ContactForm from "@/components/ContactForm";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState<any>(1);
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginY: "70px",
          flexDirection: { xs: "column", sm: "row" },
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
          height: { xs: "auto", lg: "106vh" },
          overflow: "hidden",
          marginBottom: { xs: "0px", lg: "60px" },
        }}
      >
        <ImageList variant="masonry" cols={4} gap={8}>
          {itemData.map((item: any) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
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
          <Typography>
            <span style={{ color: "#E73E7E", marginRight: "5px" }}>
              © 2023 SGS is Proudly Powered by
            </span>
            TEAM V
          </Typography>
          <Typography style={{ color: "#6F6F6F" }}>
            On social networks
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
