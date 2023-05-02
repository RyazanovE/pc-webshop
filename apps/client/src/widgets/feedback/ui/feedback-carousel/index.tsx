import React, { useMemo } from 'react';
import { Feedback } from 'src/shared/types';
import { Carousel } from 'src/shared/ui';
import { Box } from '@mui/material';
import { FeedbackCard } from 'src/entities/feedback';
import _ from "lodash";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


export type IFeedbackCarouselWidgetProps = {
  feedbacks: Feedback[]
}

const FeedbackCarouselWidget: React.FC<IFeedbackCarouselWidgetProps> = ({ feedbacks }) => {

  const grid = useMemo(() => {
    return _.chunk(feedbacks, 3)
  }, [feedbacks])

  return (
    <Carousel title='Testimonials' heading='Users Feedback' Icon={ChatBubbleOutlineIcon} pagesCount={grid.length}>
      {grid.map((feedbacks, i) =>
        <Box key={i} sx={{ display: "flex", minWidth: "100%", gap: 2 }}>
          {feedbacks.map(f =>
            <FeedbackCard key={f.id} feedback={f} sx={{ width: "33%" }} />)}
        </Box>)}
    </Carousel>
  );
}

export { FeedbackCarouselWidget };