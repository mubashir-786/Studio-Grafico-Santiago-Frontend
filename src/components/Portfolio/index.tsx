import { Box, Typography } from "@mui/material";

export default function Portfolio() {
  return (
    <Box sx={{ width: "100%", marginY: "130px" }}>
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
    </Box>
  );
}
