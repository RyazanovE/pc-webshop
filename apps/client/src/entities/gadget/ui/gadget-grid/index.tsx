import React from 'react';
import { GadgetCard } from 'src/entities/gadget';
import { ICard } from 'src/shared/types';
import { Theme } from '@emotion/react';
import { Box, SxProps } from '@mui/material';
import { gridCardSize } from 'src/shared/const/containerWidth';

export type IGadgetGridProps = {
  cards: ICard[]
  sx?: SxProps<Theme>
}

const GadgetGrid: React.FC<IGadgetGridProps> = ({ cards, sx }) => {

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, py: 1, ...sx }}>
      {cards.map(card => (
        <GadgetCard key={card.id} card={card} sx={{ width: gridCardSize }} />
      ))}
    </Box>
  );
}

export { GadgetGrid };