import { Box, Typography } from "@mui/material";

export default function HappyClient() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        marginY: "130px",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "20px", md: "32px" }, fontWeight: "600" }}
        >
          350
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#6F6F6F",
            textAlign: "center",
          }}
        >
          Happy Clients
        </Typography>
        <Box
          sx={{
            width: "1px",
            height: "20px",
            backgroundColor: "#FF214F",
            marginTop: "7px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "20px", md: "32px" }, fontWeight: "600" }}
        >
          1500
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#6F6F6F",
            textAlign: "center",
          }}
        >
          Photo Capture
        </Typography>
        <Box
          sx={{
            width: "1px",
            height: "20px",
            backgroundColor: "#FF214F",
            marginTop: "7px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "20px", md: "32px" }, fontWeight: "600" }}
        >
          875
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#6F6F6F",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Work Completed
        </Typography>
        <Box
          sx={{
            width: "1px",
            height: "20px",
            backgroundColor: "#FF214F",
            marginTop: "7px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "20px", md: "32px" }, fontWeight: "600" }}
        >
          984
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#6F6F6F",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Telephonic Talk
        </Typography>
        <Box
          sx={{
            width: "1px",
            height: "20px",
            backgroundColor: "#FF214F",
            marginTop: "7px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
