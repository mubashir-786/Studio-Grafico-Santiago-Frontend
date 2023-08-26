import bgImg from "@/assets/section1.png";
import { Box } from "@mui/material";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Image src={bgImg} alt="img" style={{ width: "100%" }} />
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ width: "100%", height: "66px", backgroundColor: "yellow" }}
          ></Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
