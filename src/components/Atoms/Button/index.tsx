import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  enabled?: boolean;
  contrast?: boolean;
  shimmer?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  enabled = true,
  contrast = false,
  shimmer = false,
  ...rest
}) => (
  <Container type="button" enabled={enabled} contrast={contrast} shimmer={shimmer} {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
