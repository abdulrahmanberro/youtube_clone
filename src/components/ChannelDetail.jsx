import React from "react";
import { Stack, Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import "../css/channelDetail.css";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  console.log(channelDetail, videos);
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "95vh",
        }}
      >
        <Box>
          <div
            style={{
              height: "300px",
              background: "#1d4350",
              background: "linear-gradient(to right, #1d4350, #a43931)",
              background: "linear-gradient(to right, #1d4350, #a43931)",
            }}
          />
          <ChannelCard marginTop="-93px" channelDetail={channelDetail} />
        </Box>
        <Box display="flex" p="2" className="channelVids">
          <Box
            sx={{
              mr: { sm: "100px" },
            }}
          />
          <Videos videos={videos} />
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetail;
