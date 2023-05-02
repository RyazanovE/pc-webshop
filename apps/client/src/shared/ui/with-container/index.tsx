import { Container, SxProps, Theme } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { containerWidth } from 'src/shared/const/containerWidth';

export type IWithContainerProps = {
  sx?: SxProps<Theme>
}

const WithContainer: React.FC<PropsWithChildren<IWithContainerProps>> = ({ children, sx }) => {
  return (
    <Container disableGutters sx={{ maxWidth: containerWidth, ...sx }}>
      {children}
    </Container>
  );
}

export { WithContainer };