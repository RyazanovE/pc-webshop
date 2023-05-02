import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Box, Button, ButtonGroup, SvgIconTypeMap, SxProps, Theme, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import useWindowDimensions from 'src/shared/hooks/use-window-dimensions';
import { BlockHeader } from '../block-heading';

export type ICarouselProps = {
  title: string
  heading: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  pagesCount: number
  sx?: SxProps<Theme>,
}


const Carousel: React.FC<PropsWithChildren<ICarouselProps>> = ({ children, title, heading, Icon, pagesCount, sx }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [page, setPage] = useState(0);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);

  const [width] = useWindowDimensions();

  const wrapperWidth = wrapperRef.current?.offsetWidth

  useEffect(() => {
    setPage(0)
  }, [width])

  useEffect(() => {
    setRightButtonDisabled(page === pagesCount)
    setLeftButtonDisabled(page === 0)
  }, [page, pagesCount])

  function onRightClickHanlder() {
    setPage(p => p + 1)
  }

  function onLeftClickHanlder() {
    setPage(p => p - 1)
  }

  return (
    <Box ref={wrapperRef} sx={{ display: "flex", flexDirection: "column", ...sx }}>
      <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
        <BlockHeader title={title} heading={heading} Icon={Icon} />
        <ButtonGroup sx={{ ml: "auto", height: 40 }} aria-label="text button group">
          <Button disabled={leftButtonDisabled} onClick={onLeftClickHanlder}><ArrowRightAltIcon transform='rotate(180)' /></Button>
          <Button disabled={rightButtonDisabled} onClick={onRightClickHanlder}><ArrowRightAltIcon /></Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }} >
        <Box sx={{ display: "flex", gap: 2, px: 1, transform: `translateX(${-(wrapperWidth ? wrapperWidth * page : 0)}px)`, transition: "translate", transitionProperty: "transform", transitionDuration: "300ms", transitionTimingFunction: "ease-in-out", }}>
          {children}
        </Box>
      </Box>
    </Box >
  );
}

export { Carousel };