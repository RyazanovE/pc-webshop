import { Box, Typography, Select, MenuItem } from '@mui/material';
import React from 'react';

export type ISortBarProps = {
  showingResultsNumber: number
  allResultsNumber: number
}

const SortBar: React.FC<ISortBarProps> = ({ showingResultsNumber, allResultsNumber }) => {
  return (
    <Box bgcolor="darkGray" sx={{ mb: 1, borderRadius: 1, display: "flex", justifyContent: "end", alignItems: "center", mx: 1, backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))" }}>
      <Typography sx={{ mr: 4 }}>
        Showing {showingResultsNumber} of {allResultsNumber} results
      </Typography>
      <label>Sort by:</label>
      <Select
        defaultValue={"10"}
        sx={{ width: 130, ml: 1 }}
      >
        <MenuItem value={10}>latest</MenuItem>
        <MenuItem value={20}>oldest</MenuItem>
        <MenuItem value={30}>price</MenuItem>
      </Select>
    </Box>
  );
}

export { SortBar };