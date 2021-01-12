import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  enabled?: boolean;
  customStyle?: string;
  contrast?: boolean;
  noShaddow?: boolean;
  shimmer?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  customStyle = '',
  enabled = true,
  contrast = false,
  noShaddow = false,
  shimmer = false,
  ...rest
}) => (
  <Container
    type="button"
    enabled={enabled}
    contrast={contrast}
    noShaddow={noShaddow}
    shimmer={shimmer}
    customStyle={customStyle}
    {...rest}
  >
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
