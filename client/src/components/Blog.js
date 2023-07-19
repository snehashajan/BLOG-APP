import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
//import { useStyles } from "./utils";


const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  //const classes = useStyles();
  const navigate = useNavigate();

  const handleEdit=()=>{
     navigate(`/myBlogs/${id}`)
  }

  /*const handleDelete= async(e)=>{
   e.preventDefault();
      try{
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`)
         const data = await res.data;
         return data;
      } catch(error){
        console.log(error);
      }
  }*/

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    //console.log(data);
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };

  return (
    <div>
      {" "}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
               <IconButton onClick={handleEdit} sx={{marginLeft : 'auto'}}><ModeEditOutlineIcon color = "warning" /></IconButton>
               <IconButton onClick={handleDelete}> <DeleteIcon color="error"/></IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              {userName ? userName.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
        
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />

        <CardContent>
          <hr />
          <br />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            <b>{userName}</b> {": "} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;