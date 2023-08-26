import { Box } from "@mui/material";
import { Img } from "../IMG";
import { Text } from "../Text";

export default function Testimonial() {
  return (
    <div
      className="bg-cover bg-no-repeat flex flex-col font-roboto h-[704px] items-start justify-center max-w-full px-1 sm:px-5  py-[130px] w-full"
      style={{ backgroundImage: "url('images/img_section.png')" }}
    >
      <div className="flex flex-col gap-[26px] items-start justify-center max-w-full mx-auto pb-[85px] md:px-0 sm:px-5 w-full">
        <div className="flex flex-col relative w-full">
          <div className="bg-gray-100_01 flex flex-col items-center justify-start bg-[#F7F7F7] mx-auto pb-[85px] pt-[60px] md:px-10 sm:px-5  rounded-md w-auto">
            <div className="flex flex-col items-start justify-center pl-[2.59px] pr-[1.91px] w-full sm:w-[450px]">
              <Text
                className="leading-normal md:leading-[24.00px] text-center text-gray-600 text-sm "
                size="txtRobotoRegular14"
              >
                <>
                  Trust us we looked for a very long time and wasted thousands
                  of dollars testing other teams, freelancers, and outsource
                  companies. I wanted to hire the best and after looking at
                  several other companies, I knew Santiago was the perfect guy
                  for the job. He is a true professional.
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[-50px] mx-auto md:px-10 sm:px-5 w-full z-[1]">
            <Img
              className="h-[114px] md:h-auto rounded-[50%] w-[114px]"
              src="images/img_avtar07jpgwebp.png"
              alt="avtar07jpgwebp"
            />
            <Text
              className="mt-4 text-black-900 text-center text-xs"
              size="txtMontserratSemiBold12"
            >
              ALEXANDER HARVARD
            </Text>
            <Text
              className="mt-[9px] text-[11px] text-center text-pink-400"
              size="txtRobotoRegular11"
            >
              GRAPHIC DESIGNER, GOOGLE INC
            </Text>
            <Box sx={{ marginTop: "20px", display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  backgroundColor: "grey",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box
                sx={{
                  backgroundColor: "grey",
                  opacity: "0.2",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box
                sx={{
                  backgroundColor: "grey",
                  opacity: "0.2",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                }}
              ></Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
