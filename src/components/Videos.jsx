import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard, Loading } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loading />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          <div>{item.id.channelId && <ChannelCard channelDetail={item} />}</div>
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
