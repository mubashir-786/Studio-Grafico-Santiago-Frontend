import { Button } from "@mui/material";

type Props = {
  sx?: any["sx"];
  text: string;
  backgroundColor?: string;
  color?: string;
};

const ButtonComponent = ({ sx, text, backgroundColor, color }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : "black",
        color: color ? color : "white",
        "&:hover": {
          backgroundColor: backgroundColor ? backgroundColor : "black",
          color: color ? color : "white",
          ...sx,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
