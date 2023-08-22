import React from "react";

const sizeClasses = {
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratSemiBold18WhiteA700: "font-montserrat font-semibold",
  txtMontserratMedium12Gray600: "font-medium font-montserrat",
  txtLatoRegular12Gray600: "font-lato font-normal",
  txtMontserratBold32: "font-bold font-montserrat",
  txtMontserratSemiBold18: "font-montserrat font-semibold",
  txtLatoRegular12Gray900: "font-lato font-normal",
  txtMontserratRegular20: "font-montserrat font-normal",
  txtMontserratMedium32Gray90001: "font-medium font-montserrat",
  txtMontserratSemiBold14: "font-montserrat font-semibold",
  txtMontserratSemiBold12: "font-montserrat font-semibold",
  txtMontserratSemiBold32: "font-montserrat font-semibold",
  txtLatoRegular32: "font-lato font-normal",
  txtLatoRegular10: "font-lato font-normal",
  txtMontserratExtraBold117: "font-extrabold font-montserrat",
  txtLatoRegular30: "font-lato font-normal",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular12: "font-lato font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtPoppinsMedium19: "font-medium font-poppins",
  txtLatoMedium20: "font-lato font-medium",
  txtMontserratMedium32: "font-medium font-montserrat",
  txtMontserratMedium12: "font-medium font-montserrat",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratMedium16Gray90001: "font-medium font-montserrat",
  txtLatoRegular16: "font-lato font-normal",
  txtRobotoRegular14: "font-normal font-roboto",
  txtMontserratSemiBold40: "font-montserrat font-semibold",
  txtLatoRegular25: "font-lato font-normal",
  txtMontserratMedium16Gray600: "font-medium font-montserrat",
  txtMontserratMedium14WhiteA700: "font-medium font-montserrat",
  txtMontserratMedium12Pink400: "font-medium font-montserrat",
  txtRobotoRegular14Gray500: "font-normal font-roboto",
  txtRobotoRegular11: "font-normal font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
