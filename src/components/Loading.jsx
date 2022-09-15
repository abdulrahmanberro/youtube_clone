import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { AddBox } from "@mui/icons-material";

const Loading = () => {
  return (
    <Box minHeight="100vh" color="white">
      <Typography textAlign="center" fontSize={20} pt={20} vairant="h2">
        Looks Like Ther's No Videos.
      </Typography>
      <Typography color="gray" textAlign="center" fontSize={20} vairant="h2">
        I am using a free API that allows me to send only 500 API Calls per day
        so come back tommorow :)
      </Typography>
    </Box>
  );
};

export default Loading;
