import React from "react";
import { StyledButton } from "./style";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  IconComponent: React.FC<{ size: number }>;
}

export const IconButton = ({IconComponent, ...props}: IconButtonProps) => (
  <StyledButton {...props}>
    <IconComponent size={24} />
  </StyledButton>
)
