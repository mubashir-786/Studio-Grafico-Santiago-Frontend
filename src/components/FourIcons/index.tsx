import img2 from "@/assets/images/btm-2.png";
import img3 from "@/assets/images/btm-3.png";
import img4 from "@/assets/images/btm-4.png";
import { Box } from "@mui/material";
import Image from "next/image";
export default function FourIcon() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: { xs: "center", sm: "space-around" },
        flexWrap: "wrap",
        marginY: { xs: "30px", md: "70px" },
      }}
    >
      <Image
        src={img3}
        className="w-[75px] h-[35px] sm:w-[100px] sm:h-[50px] lg:w-[225px] lg:h-[110px]"
        alt={"pic1"}
      />
      <Image
        src={img2}
        className="w-[75px] h-[35px] sm:w-[100px] sm:h-[50px] lg:w-[225px] lg:h-[110px]"
        alt={"pic2"}
      />
      <Image
        src={img3}
        className="w-[75px] h-[35px] sm:w-[100px] sm:h-[50px] lg:w-[225px] lg:h-[110px]"
        alt={"pic3"}
      />
      <Image
        src={img4}
        className="w-[75px] h-[35px] sm:w-[100px] sm:h-[50px] lg:w-[225px] lg:h-[110px]"
        alt={"pic4"}
      />
    </Box>
  );
}
