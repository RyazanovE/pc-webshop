import { Card, CardMedia, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { ICategory } from 'src/shared/types';

export type ICategoryCardProps = {
  category: ICategory
  sx?: SxProps<Theme>
}

const CategoryCard: React.FC<ICategoryCardProps> = ({ category, sx }) => {
  const { image, title } = category
  return (
    <Card
      variant='outlined'
      sx={{
        textAlign: "center",
        py: "28px",
        transitionProperty: "transform",
        transitionDuration: "500",
        transitionTimingFunction: "ease-in-out",
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.1)"
        },
        ...sx
      }}>
      <CardMedia
        sx={{ height: '64px', width: "64px", mx: "auto", mb: 1 }}
        image={image}
        title={title}
      />
      <Typography component='p' >
        {title}
      </Typography>
    </Card>
  );
}

export { CategoryCard };