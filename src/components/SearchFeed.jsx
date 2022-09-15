import React from "react";
import { useEffect, useState } from "react";
import { alertTitleClasses, Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="body2" sx={{ color: "white", mb: 2 }}>
        <span
          style={{ color: "#F31503", fontSize: "2rem", fontWeight: "bold" }}
        >
          <span style={{ color: "white" }}>Search Results for </span>
          {searchTerm}
        </span>{" "}
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
