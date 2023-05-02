import { Box, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { IFeedback } from 'src/shared/types';
import Image from 'next/image'

export type IFeedbackCardProps = {
  feedback: IFeedback
  sx?: SxProps<Theme>

}

const FeedbackCard: React.FC<IFeedbackCardProps> = ({ feedback, sx }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", ...sx }}>
      <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2, position: "relative", mb: "25px", ":after": { content: '""', width: 0, height: 0, borderTop: "25px solid white", borderRight: "50px solid transparent", position: "absolute", bottom: "-25px", left: "100px" } }}>
        <Typography color="black">
          {feedback.content}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Image alt={feedback.nickname} src={feedback.avatar ?? "/assets/common-avatar.jpg"} width={60} height={60} style={{ borderRadius: 10 }} />
        <Box sx={{ display: "flex", flexDirection: 'column' }}>
          <Typography color="gray" variant='body2'>
            {feedback.date}
          </Typography>
          <Typography variant='h6'>
            {feedback.nickname}
          </Typography>
        </Box>

      </Box>
    </Box >
  );
}

export { FeedbackCard };