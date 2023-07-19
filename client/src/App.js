import './App.css';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom";
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import BlogDetail from "./components/BlogDetail"
import UserBlogs from './components/UserBlogs';
import AddBlog from "./components/AddBlog"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from './store';

function App() {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(window.localStorage.getItem("userId")){
      dispatch(authActions.login());
    }
  }, [dispatch])
  return (
    <div>
    <Header/>
    <Routes>
      { !isLoggedIn ? <Route exact path="/auth" element={<Auth/>}/> :
      <>
      <Route exact path="/blogs" element={<Blogs/>}/>
      <Route exact path="/myBlogs/:id" element={<BlogDetail/>}/>
      <Route exact path="/myBlogs" element={<UserBlogs/>}/>
      <Route exact path="/blogs/add" element={<AddBlog/>}/>
      </>
      }
    </Routes>
    </div>
  );
}

export default App;
