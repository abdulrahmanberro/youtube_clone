import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";
import { Link } from "react-router-dom";

const VideoCard = ({ video: { id: videoId, snippet } }) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "0",
        border: "none",
        outline: "none",
      }}
    >
      <Link to={videoId ? `./video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: "358px",
            height: "180px",
          }}
        />
      </Link>

      <CardContent
        sx={{
          background: "#1e1e1e",
          height: "7rem",
          p: "1rem",
        }}
      >
        <Link to={videoId ? `./video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "20rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              color: "#fff",
            }}
          >
            {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet.channelId
              ? `./channel/${snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            style={{
              maxWidth: "10rem",
              color: "gray",
              letterSpacing: "1px",
              display: "block",
              paddingTop: "0.5rem",
            }}
          >
            {snippet.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
