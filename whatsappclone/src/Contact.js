import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import ChatPage from "./ChatPage";

const Contact = (props) => {
  const [contact, setContact] = useState([]);
  const [name, setName] = useState("");
  const currUser = sessionStorage.getItem("user");
  const state = useSelector((state)=> state.CurrChatReducer);


  useEffect(() => {
    axios.get(`http://localhost:8002/users/${props.userId}`).then((data) => {
      setContact(data.data);
      setName(data.data.name);
    });
  }, []);

  const openChat = () => {
    console.log(state);
  }

  var rgbArr =[];
  for (let i = 0; i < 3; i++) {
      rgbArr[i] = Math.random()*255;
  }
  return (
    <div className="grid-container">
      <div className="grid-item-avatar">
        <Avatar style={{backgroundColor: `rgba(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]},0.5)`}}>{name.charAt(0)}</Avatar>
      </div>
      <span className="grid-item-name">{name}</span>
      <div className="grid-item-button"><button className="chat-button" onClick={openChat}>Chat</button></div>
      </div>
    
  );
};

export default Contact;
