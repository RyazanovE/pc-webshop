import { Grid, Box } from '@mui/material';
import React from 'react';
import { Accordeon, CheckBoxItem } from 'src/shared/ui';

export type IindexProps = {
  categories: string[]
  genders: {
    title: string;
    counter: number;
  }[]
}

const ShopSidebar: React.FC<IindexProps> = ({ categories, genders }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, py: 2, mr: 1 }}>
      <Accordeon defaultExpanded title='Categories'>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {categories.map((cat, i) => <CheckBoxItem key={i} title={cat} />)}
        </Box>
      </Accordeon>

      <Accordeon defaultExpanded title='Gender'>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {genders.map((gen, i) => <CheckBoxItem key={i} title={gen.title} counter={gen.counter} />)}
        </Box>
      </Accordeon>
    </Box>
  );
}

export { ShopSidebar };