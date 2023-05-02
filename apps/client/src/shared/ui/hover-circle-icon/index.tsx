import { Badge, Box, SvgIconTypeMap, SxProps, Theme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { useState } from 'react';

export type IindexProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  withBadge?: boolean
  sx?: SxProps<Theme>
}

const HoverCircleIcon: React.FC<IindexProps> = ({ Icon, sx, withBadge }) => {
  const [isHovered, setIsHovered] = useState(false);

  function triggerHover() {
    setIsHovered(p => !p)
  }

  return (
    <Box sx={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 40, height: 40, ...sx }}>
      <Badge onMouseEnter={triggerHover} onMouseLeave={triggerHover} sx={{ cursor: "pointer", zIndex: 2 }} invisible={!withBadge} badgeContent={4} color="primary">
        <Icon sx={{ cursor: "pointer" }} />
      </Badge>
      <Box sx={{ position: "absolute", width: 40, height: 40, backgroundColor: "redHeader", borderRadius: "50%", transform: isHovered ? "scale(1)" : "scale(0)", transition: "transform", transitionDuration: "300ms" }} />
    </Box>
  );
}

export { HoverCircleIcon };