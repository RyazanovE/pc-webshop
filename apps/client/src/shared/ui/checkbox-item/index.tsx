import { Box, Checkbox, Typography } from '@mui/material';
import React from 'react';

export type ICheckBoxItemProps = {
  title: string
  gap?: number | string
  counter?: number
}

const CheckBoxItem: React.FC<ICheckBoxItemProps> = ({ title, counter, gap = 2 }) => {

  const counterNum = counter ? ` (${counter})` : ""

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap }}>
      <Checkbox />
      <Typography>
        {title + counterNum}
      </Typography>
    </Box>
  );
}

export { CheckBoxItem };