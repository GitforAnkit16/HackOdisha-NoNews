import React,{useState} from "react";
import "./NewsBox.css";
import {Button} from "react-bootstrap";
import db from "../firebase.js";
function NewsBox(){
    const sendNews = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Ankit Panda",
            text:newsMessage,
            image: newsImage

        });
        setNewsMessage("");
        setNewsImage("");
    }
    const [newsMessage,setNewsMessage]=useState("");
    const [newsImage,setNewsImage]=useState("");
    return <div className="newsBox">
        <form>
            <div className="newsBox-input">
            <input onChange = { (e) => setNewsMessage(e.target.value)} value={newsMessage} placeholder="What's happening" type='text'></input>
            </div>
            <input     
                onChange = { (e) => setNewsImage(e.target.value)} 
                value={newsImage}
                className="newsbox-inputimg"
                placeholder="Enter image URL"
                type="text"
            />
            <Button onClick={sendNews} type = "submit" className = "newsbox-post">Post</Button>
        </form>

    </div>
}
export default NewsBox;