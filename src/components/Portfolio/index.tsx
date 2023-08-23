import img2 from "@/assets/images/Item-1.png";
import img3 from "@/assets/images/Item-2.png";
import img4 from "@/assets/images/Item-3.png";
import img5 from "@/assets/images/Item-4.png";
import img6 from "@/assets/images/Item-5.png";
import img7 from "@/assets/images/Item-6.png";
import img9 from "@/assets/images/Item-8.png";
import img1 from "@/assets/images/Item.png";
import img10 from "../../assets/images/Item-9.png";
// import img1 from "../../assets/images/Item.png";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
export default function Portfolio() {
  const itemData = [
    {
      img: img1,
      title: "Bed",
    },
    {
      img: img2,
      title: "Books",
    },
    {
      img: img3,
      title: "Sink",
    },
    {
      img: img4,
      title: "Kitchen",
    },
    {
      img: img5,
      title: "Blinds",
    },
    {
      img: img5,
      title: "Chairs",
    },
    {
      img: img6,
      title: "Laptop",
    },
    {
      img: img9,
      title: "Doors",
    },
    {
      img: img5,
      title: "Coffee",
    },
    {
      img: img10,
      title: "Storage",
    },
    {
      img: img7,
      title: "Candle",
    },
    {
      img: img3,
      title: "Coffee table",
    },
  ];
  return (
    <Box sx={{ width: "100%", marginTop: "60px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <Typography sx={{ color: "#939393", fontSize: "12px" }}>
          Best of Ours
        </Typography>
        <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
          New <span style={{ color: "#E73E7E" }}>Projects</span>{" "}
        </Typography>
        <Box
          sx={{ width: "100px", height: "2px", backgroundColor: "#E73E7E" }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "95%",
          margin: "auto",
          height: { xs: "auto", lg: "106vh" },
          overflow: "hidden",
          // marginBottom: { xs: '0px', lg: '60px' }
        }}
      >
        <ImageList variant="masonry" cols={4} gap={8}>
          {itemData.map((item: any) => (
            <ImageListItem key={item.img}>
              <Image src={item.img} alt={item.title} />
              {/* <img
                src={img3}
                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
              // loading="lazy"
              /> */}
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
