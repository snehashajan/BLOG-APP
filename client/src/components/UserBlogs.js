import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";

function UserBlogs() {
  const id = window.localStorage.getItem("userId");
  const [blogs, setBlogs] = useState();

  /*useEffect(()=>{
     const sendRequest = async()=>{
        try{
    const result = await axios.get(`http://localhost:5000/api/blog/user${id}`)
      const data =  await result.data;
      return data;
        } catch(error){
           console.log(error);
        }
     }

     sendRequest().then((data)=>setBlogs(data.user));
  }, []);
    console.log(blogs);*/

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.user));
  }, []);
  console.log(blogs);

  return (
    <div>
      <div>
        /*
        {blogs &&
          blogs.blogs &&
          blogs.blogs.map((blog, index) => (
            <Blog
              key={index}
              id={blog._id}
              isUser={true}
              title={blog.title}
              description={blog.description}
              imageURL={blog.image}
              userName={blogs.name}
            />
          ))}
        */
      </div>
    </div>
  );
}

export default UserBlogs;
