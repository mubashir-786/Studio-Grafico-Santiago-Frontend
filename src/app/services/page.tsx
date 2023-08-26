"use client";
import imgbg from "@/assets/images/Item-7.png";
import one from "@/assets/images/arrow.png";
import four from "@/assets/images/bag.png";
import five from "@/assets/images/bucket.png";
import heart from "@/assets/images/heart.png";
import six from "@/assets/images/monitor.png";
import msg from "@/assets/images/msg.png";
import pencil from "@/assets/images/pencil.png";
import three from "@/assets/images/pencilScale.png";
import two from "@/assets/images/puzzle.png";
import speak from "@/assets/images/speak.png";
import img from "@/assets/images/test.png";
import ButtonComponent from "@/components/ButtonComponent";
import ImageRow from "@/components/ImageRow";
import ServiceTopSection from "@/components/ServiceTopSection";
import SectionComponent from "@/components/ServicesComponent";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [navWidth, setNavWidth] = useState("0%");
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
          <rect width="23" height="2" fill="black" />
          <rect y="8" width="23" height="2" fill="black" />
          <rect y="8" width="23" height="2" fill="black" />
          <rect y="16" width="23" height="2" fill="black" />
        </svg>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
          textAlign: { xs: "center", sm: "start" },
        }}
      >
        <Typography sx={{ marginBottom: "10px", fontSize: "12px" }}>
          UNLIMITED CUSTOMIZATION POSIBILITIES
        </Typography>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Flawless design percision and well-defined code
        </Typography>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          provided of your projects
        </Typography>
      </Box>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
        container
      >
        <Grid sx={{ marginX: "20px" }} item xs={12} sm={6} lg={3}>
          <ServiceTopSection
            heading="E-COMMERCE SOLUTIONS"
            imgPath={img}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s"
          />
        </Grid>
        <Grid item sx={{ marginX: "20px" }} xs={12} sm={6} lg={3}>
          <ServiceTopSection
            heading="E-COMMERCE SOLUTIONS"
            imgPath={img}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s"
          />
        </Grid>
        <Grid item sx={{ marginX: "20px" }} xs={12} sm={6} lg={3}>
          <ServiceTopSection
            heading="E-COMMERCE SOLUTIONS"
            imgPath={img}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s"
          />
        </Grid>
      </Grid>
      <Grid sx={{ marginTop: "100px" }} container>
        <Grid item xs={12} sm={6} lg={6}>
          {/* <Box
                        sx={{ width: "100%", height: "700px" }}
                    > */}
          <Image
            src={imgbg}
            alt="bg"
            style={{ width: "100%", height: "100%" }}
          />
          {/* </Box> */}
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "1000px", sm: "600px" },
              backgroundColor: "#1c1c1c",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              overflowY: { xs: "hidden", sm: "scroll", md: "hidden" },
            }}
          >
            <Box
              sx={{
                height: "600px",
                width: { xs: "100%", md: "50%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "20px",
              }}
            >
              <SectionComponent
                heading="Branding Design"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatem autem voluptas, odio assumenda aperiam repellendus"
                imgPath={one}
              />
              <SectionComponent
                heading="Branding Design"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatem autem voluptas, odio assumenda aperiam repellendus"
                imgPath={three}
              />
              <SectionComponent
                heading="Branding Design"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatem autem voluptas, odio assumenda aperiam repellendus"
                imgPath={five}
              />
            </Box>
            <Box
              sx={{
                height: "600px",
                width: { xs: "100%", md: "50%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "20px",
              }}
            >
              <SectionComponent
                heading="Branding Design"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatem autem voluptas, odio assumenda aperiam repellendus"
                imgPath={two}
              />
              <SectionComponent
                heading="Branding Design"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatem autem voluptas, odio assumenda aperiam repellendus"
                imgPath={four}
              />
              <SectionComponent
                heading="Branding Design"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatem autem voluptas, odio assumenda aperiam repellendus"
                imgPath={six}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}></Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
          textAlign: { xs: "center", sm: "start" },
        }}
      >
        <Typography sx={{ marginBottom: "10px", fontSize: "12px" }}>
          THE BEST DIGITAL SOLUTIONS
        </Typography>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          An innovative firm focusing on brand
        </Typography>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          tactics and digital crafting
        </Typography>
      </Box>
      <Grid sx={{ marginTop: "80px" }} container>
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ marginTop: "20px", marginBottom: "20px" }}
              src={msg}
              alt="img"
            />
            <Typography sx={{ marginBottom: "10px", fontSize: "12px" }}>
              THE BEST DIGITAL SOLUTIONS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ marginTop: "20px", marginBottom: "20px" }}
              src={pencil}
              alt="img"
            />
            <Typography sx={{ marginBottom: "10px", fontSize: "12px" }}>
              THE BEST DIGITAL SOLUTIONS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ marginTop: "20px", marginBottom: "20px" }}
              src={speak}
              alt="img"
            />
            <Typography sx={{ marginBottom: "10px", fontSize: "12px" }}>
              THE BEST DIGITAL SOLUTIONS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ marginTop: "20px", marginBottom: "20px" }}
              src={heart}
              alt="img"
            />
            <Typography sx={{ marginBottom: "10px", fontSize: "12px" }}>
              THE BEST DIGITAL SOLUTIONS
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
        }}
        container
      >
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <Image
              style={{
                width: "300px",
                height: "250px",
              }}
              src={img}
              alt="img"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3.5}>
          <Box
            sx={{
              height: "250px",
              border: "solid 1.5px lightgrey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20px",
              marginRight: "20px",
              marginLeft: { xs: "20px", sm: "0px" },
              marginTop: { xs: "20px", sm: "0px" },
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>01. DISCUSSION</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum
              enim sed placeat deserunt deleniti impedit obcaecati aspernatur
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={3.5}>
          <Box
            sx={{
              height: "250px",
              border: "solid 1.5px #f7f7f7",
              backgroundColor: "#f7f7f7",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20px",
              marginRight: "20px",
              marginLeft: { xs: "20px", sm: "36px", md: "0px" },
              marginTop: { xs: "20px", sm: "30px", md: "0px" },
              marginBottom: { xs: "80px", sm: "0px" },
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>01. DISCUSSION</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum
              enim sed placeat deserunt deleniti impedit obcaecati aspernatur
            </Typography>
            <Box sx={{ height: "50px", width: "100%", marginTop: "20px" }}>
              <ButtonComponent text="About Company" />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          height: { xs: "1100px", sm: "650px" },
          marginTop: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6} lg={5}>
            <Box sx={{ width: "100%", height: "500px" }}>
              <Image
                src={img}
                alt="img"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "500px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={5}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "620px", md: "450px" },
                paddingX: "20px",
              }}
            >
              <Typography
                sx={{ color: "#fb8ca3", marginTop: { xs: "20px", md: "0px" } }}
              >
                We build perfect websites
              </Typography>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Elegantly crafted
              </Typography>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                design for your site
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                ducimus error unde sed ab magnam perspiciatis! Rerum, inventore
                natus ipsa dolor error expedita, aperiam nihil neque cupiditate
                mollitia odio perspiciatis.
              </Typography>
              <br />
              <ImageRow />
              <ImageRow />
              <ImageRow />
              <ImageRow />
              <ImageRow isLine={false} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", md: "50%" },
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <Typography sx={{ color: "#fb8ca3" }}>
          We build perfect websites
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "20px", md: "20px" }, fontWeight: "bold" }}
        >
          “Design Better. Faster. Together.
        </Typography>
        <br />
        <Typography sx={{ textAlign: "center" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </Box>
      <br />
      <br />
      <Box
        sx={{
          width: "80%",
          height: "400px",
          backgroundColor: "red",
          margin: "auto",
        }}
      >
        <Image
          src={img}
          alt="img"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "400px",
          }}
        />
      </Box>
      <br />
      <br />
    </Box>
  );
}
