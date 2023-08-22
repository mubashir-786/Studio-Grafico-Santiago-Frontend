"use client";
import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ContactRow from "./ContactRow";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import emailIcon from "@/assets/icons/emailIcon.png";
import mapIcon from "@/assets/icons/mapIcon.png";
import messageIcon from "@/assets/icons/messageIcon.png";

const ContactForm = () => {
  const [text, setText] = useState("");

  return (
    <Box
      sx={{
        width: "95%",
        backgroundColor: "#1c1c1c",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        paddingTop: { xs: "70px", sm: "100px" },
        paddingBottom: "70px",
        paddingX: { xs: "10px", sm: "50px" },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid item xs={12} sm={6} md={5}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "auto", sm: "650px" },
            }}
          >
            <Typography sx={{ color: "#6F6F6F" }}>
              Technology experts
            </Typography>
            <br />
            <Typography
              sx={{
                fontSize: "32px",
                color: "white",
              }}
            >
              Feel free to get in touch with us any{" "}
              <span style={{ color: "#E73E7E" }}>convenient way</span>
            </Typography>
            <br />
            <Typography sx={{ color: "#6F6F6F", marginBottom: "50px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            {/* Row Component */}
            <ContactRow
              heading={"Postal Address"}
              text={"301 The Italy House, Rome, Italy, 2-IT."}
              image={mapIcon}
            />
            <ContactRow
              heading={"General Enquiries"}
              text={"noreply@domain.com "}
              image={emailIcon}
            />
            <ContactRow
              heading={"Business Phone"}
              text={"123 456 7890 / 123 456 700"}
              image={messageIcon}
              isLine={false}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white",
              height: { xs: "auto", sm: "650px" },
              paddingY: { xs: "20px", sm: "70px" },
              paddingX: { xs: "20px", sm: "70px" },
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                color: "#232323",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Looking for a excellent{" "}
              <span style={{ color: "#E73E7E" }}>business idea</span>?
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InputComponent
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Name*"
                value={text}
              />
              <InputComponent
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="E-mail*"
                value={text}
              />
              <InputComponent
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Subject"
                value={text}
              />
              <InputComponent
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Message*"
                value={text}
                row={6}
              />
            </Box>
            <ButtonComponent text="SEND MESSAGE" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
