import { Box, IconButton, Button, Stack, Typography } from "@mui/material";
import React from "react";
import cycling from "../../../public/cycling.jpg";
import running from "../../../public/running.jpg";
import swimming from "../../../public/swimming.jpg";
import walking from "../../../public/walking.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateDashboardActivityStatus } from "../../app/features/activitySlice";
import { useDispatch ,useSelector} from "react-redux";
import {toast} from 'react-toastify';

const Activity = ({activity}) => {
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user);
  const handleClick = (activityid) => {
    console.log("activity removed  !");
    dispatch(updateDashboardActivityStatus({activityid,status:false}));
    toast.info("Activity Removed !");
  };



  const images={
    cycling,
    running,
    swimming,
    walking
  }
  return (
    <Stack sx={{
        minHeight: "330px",
        // flexBasis: "29%",
        width: "25%",
        minWidth: "300px",
        boxShadow:'1px 1px 6px grey',
        borderRadius:'10px',
         transition:'all 0.3s',
        "&:hover": {
          filter: "brightness(90%)",
          transform:"translateY(-5px)",
          boxShadow:'1px 1px 15px grey',
          cursor:'pointer',
        },
        "&:hover button": {
          visibility: "visible",
          zIndex: "10000",
        },

    }}>
    <Stack
      sx={{
       
        // "&:hover": {
        //   filter: "brightness(90%)",
        // },
        // "&:hover button": {
        //   visibility: "visible",
        //   zIndex: "10000",
        // },
        overflow: "hidden",
        position: "relative",
        borderRadius: "10px 10px 0 0",
        // justifyContent:'space-between'
        "&:hover>div": {
            transform: "scale(1.04)",
          },
      }}
    >
     {user.userid===activity.userid &&  <IconButton
        aria-label="delete"
        sx={{
          color: "white",
          border: "1px solid white",
          width: "fit-content",
          visibility: "hidden",
          alignSelf: "end",
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: "10000",
          "&:hover": {
            border: "1px solid red",
            color: "red",
          },
        }}
        size="small"
        onClick={()=>handleClick(activity.activityid)}
      >
        <DeleteIcon />
      </IconButton>}

      <Stack
        sx={{
          width: "100%",
          height: "230px",

          padding: "0.4rem 1rem 0.2rem",
        //   border: "1px solid red",
          backgroundImage: `url(${images[activity?.activityname]})`,
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          justifyContent: "space-between",
          transition: "all 0.2s",
        
        }}
        className="activity"
      ></Stack>
     
    </Stack>
    <Stack
      padding={2}
        sx={{
        //  position:'absolute',
        //  zIndex:333333,
         width:'100%',
         margin:'auto',
         borderRadius:'0 0 10px 10px'
        }}
      >
        <Stack direction="row" sx={{}} gap={3}>
          <Typography fontWeight='bold'>Activity: </Typography>
          <Typography>{activity.activityname}</Typography>
        </Stack>
        <Stack direction="row" sx={{}} gap={3}>
          <Typography fontWeight='bold'>Distance: </Typography>
          <Typography>{activity.distance} {activity.unit}</Typography>
        </Stack>
        <Stack direction="row" sx={{}} gap={3}>
          <Typography fontWeight='bold'>Time: </Typography>
          <Typography>{activity.time} sec</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Activity;
