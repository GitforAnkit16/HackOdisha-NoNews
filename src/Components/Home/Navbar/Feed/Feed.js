import React,{useEffect, useState} from "react";
import NewsBox from "./NewsBox/NewsBox.js"
import Post from "../Post/Post.js";
import "./Feed.css"
import db from "./firebase.js";
const Feed = () => {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    },[]);
    return (
        <div className="feed">
              <NewsBox />
              {posts.map(post => (
                <Post 
                    displayName={post.displayName}
                    text={post.text}
                    image = {post.image}
                />
              ))}
            
           
        </div>
    );
};
export default Feed;