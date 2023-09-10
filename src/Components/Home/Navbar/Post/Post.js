import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./Post.css";

function Post({ displayName, text, image }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [showPolls, setShowPolls] = useState(false);
  const [pollOptions, setPollOptions] = useState([
    { option: "Yes    ", count: 0 },
    { option: "No     ", count: 0 },
    { option: "NOTA   ", count: 0 },
  ]);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      const firestore = firebase.firestore();
      const postRef = firestore.collection("posts").doc("yourPostId");
      const likesCollection = postRef.collection("likes");

      likesCollection
        .add({
          likedBy: displayName,
        })
        .then(() => {
          console.log("Post liked successfully.");
        })
        .catch((error) => {
          console.error("Error liking post: ", error);
        });
    }
    setLiked(!liked);
  };

  const toggleDiscussion = () => {
    setShowDiscussion(!showDiscussion);
    setShowPolls(false); // Close polls when opening discussion
  };

  const togglePolls = () => {
    setShowPolls(!showPolls);
    setShowDiscussion(false); // Close discussion when opening polls
  };

  const handlePollOptionClick = (index) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index].count += 1;
    setPollOptions(updatedOptions);
  };

  return (
    <div className="post">
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>{displayName}</h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img src={image} alt="Post" />
        </div>
        <div className="post__Footer">
          <ul>
            <li onClick={handleLike}>Like</li>
            <li onClick={toggleDiscussion}>Discussion Section</li>
            <li onClick={togglePolls}>Polls</li>
          </ul>
          <p>{likes} likes</p>
        </div>
        {showDiscussion && (
          <div className="discussion">
          <h3>What do you guys think about this news?</h3>
<input     
    className="newsbox-inputimg"
    placeholder="Enter your views"
    type="text"
/>
<button type="submit" >Submit</button>
          </div>
        )}
        {showPolls && (
          <div className="polls">
            <h2>Polls</h2>
            <h3>Do you agree with the news?</h3>
            <div className="poll-options">
              {pollOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handlePollOptionClick(index)}
                  className="poll-option"
                >
                  {option.option}
                  <span className="poll-count">{option.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;




