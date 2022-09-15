import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";

import { Videos, Loading } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import "../css/videoDetial.css";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loading />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="100%">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              position: "sticky",
              top: "30px",
            }}
          >
            <ReactPlayer
              url={`https//:www.youtube.com/watch?v=${id}`}
              className="react-player"
            />
            <Typography
              sx={{
                fontSize: { xs: "1rem" },
              }}
              color="#fff"
              p={2}
              variant="h5"
              className="vidTitle"
            >
              {title}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              sx={{
                color: "white",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color="#fff"
                  variant={{ sm: "subtitle1", md: "h6" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap={"20px"} alignItems="center">
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={1}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          className="videoDetailCard"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
