"use client";
import img from "@/assets/images/test.png";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
// import sixImages from "@/assets/images/6images.png";
import one from "@/assets/images/1.png";
import two from "@/assets/images/2.png";
import three from "@/assets/images/3.png";
import four from "@/assets/images/4.png";
import five from "@/assets/images/5.png";
import six from "@/assets/images/6.png";
import heart from "@/assets/images/heart.png";
import msg from "@/assets/images/msg.png";
import pencil from "@/assets/images/pencil.png";
import speak from "@/assets/images/speak.png";
import ButtonComponent from "@/components/ButtonComponent";
import ImageRow from "@/components/ImageRow";

export default function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
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
          <Box>
            <Image
              src={img}
              alt="img"
              style={{
                objectFit: "cover",
                width: "350px",
                height: "200px",
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              E-COMMERCE SOLUTIONS
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <Box
              sx={{
                height: "1px",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                marginTop: "20px",
              }}
            />
          </Box>
        </Grid>
        <Grid item sx={{ marginX: "20px" }} xs={12} sm={6} lg={3}>
          <Box sx={{ marginX: "20px" }}>
            <Image
              src={img}
              alt="img"
              style={{
                objectFit: "cover",
                width: "350px",
                height: "200px",
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              E-COMMERCE SOLUTIONS
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <Box
              sx={{
                height: "1px",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                marginTop: "20px",
              }}
            />
          </Box>
        </Grid>
        <Grid item sx={{ marginX: "20px" }} xs={12} sm={6} lg={3}>
          <Box sx={{ marginX: "20px" }}>
            <Image
              src={img}
              alt="img"
              style={{
                objectFit: "cover",
                width: "350px",
                height: "200px",
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              E-COMMERCE SOLUTIONS
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <Box
              sx={{
                height: "1px",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                marginTop: "20px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ marginTop: "100px" }} container>
        <Grid item xs={12} sm={6} lg={6}>
          <Box
            sx={{ width: "100%", height: "600px", backgroundColor: "#1c1c1c" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Box
            sx={{
              width: "100%",
              height: "600px",
              backgroundColor: "#1c1c1c",
              display: "flex",
            }}
          >
            <Box
              sx={{
                height: "600px",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ marginTop: "20px", marginBottom: "20px" }}
                src={one}
                alt="img"
              />
              <Image
                src={three}
                alt="img"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              />
              <Image
                src={five}
                alt="img"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              />
            </Box>
            <Box
              sx={{
                height: "600px",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ marginTop: "20px", marginBottom: "20px" }}
                src={two}
                alt="img"
              />
              <Image
                src={four}
                alt="img"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              />
              <Image
                src={six}
                alt="img"
                style={{ marginTop: "20px", marginBottom: "20px" }}
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
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>01. DISCUSSION</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum
              enim sed placeat deserunt deleniti impedit obcaecati aspernatur
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3.5}>
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
          height: "650px",
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
            <Box sx={{ width: "100%", height: "450px" }}>
              <Typography sx={{ color: "#fb8ca3" }}>
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
              <ImageRow />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "50%",
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
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
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
