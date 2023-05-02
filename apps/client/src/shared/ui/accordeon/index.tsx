import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export type IAccordeonProps = {
  title: string
  defaultExpanded?: boolean

}

const Accordeon: React.FC<React.PropsWithChildren<IAccordeonProps>> = ({ title, children, ...props }) => {
  return (
    <Accordion
      disableGutters
      {...props}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography >{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

export { Accordeon };