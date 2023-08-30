import React from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';
import ButtonAccordion from '../Button/ButtonAccordion';

// Custom styles for AccordionSummary
const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: 'var(--color-black)',
  color: 'white',
  '&.Mui-expanded': {
    backgroundColor: 'black',
  },
  borderBottom: '0.5px solid grey',
  borderTop: '0.5px solid grey',
}));

export default function CustomAccordion(props) {
  return (
    <div>
      <Accordion sx={{
          marginBottom: '20px', // Add margin to create space
        }}>
        <CustomAccordionSummary
          expandIcon={<ButtonAccordion btntxt="+"/> }
          sx={{ height: '78px', width:'100%' }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.AccTitle}</Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.AccContent}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
