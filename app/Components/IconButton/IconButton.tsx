import React from 'react';
import { StyledButton } from './style';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  IconComponent: React.FC<{ size: number }>;
}

export const IconButton: React.FC<IconButtonProps> = ({
  IconComponent,
  ...props
}) => (
  <StyledButton {...props}>
    <IconComponent size={12} />
  </StyledButton>
);
