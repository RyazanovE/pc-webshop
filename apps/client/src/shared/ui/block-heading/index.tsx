import { Box, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

export interface IBlockHeaderProps {
  title: string
  heading: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
}

const BlockHeader: React.FC<IBlockHeaderProps> = ({ heading, title, Icon }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Icon sx={{ color: "redHeader" }} />
        <Typography ml={0.5} variant='h6' color="redHeader" component="h2">
          {title}
        </Typography>
      </Box>
      <Typography variant='h4' color="white" component="h2">
        {heading}
      </Typography>
    </Box>
  );
}

export { BlockHeader };