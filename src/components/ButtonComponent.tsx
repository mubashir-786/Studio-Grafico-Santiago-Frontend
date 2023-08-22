import React from "react";
import { Button } from "@mui/material";

type Props = {
  sx?: any["sx"];
  text: string;
};

const ButtonComponent = ({ sx, text }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "black",
          ...sx,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
