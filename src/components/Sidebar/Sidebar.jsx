import "./Sidebar.css";
import  { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompts,newChat} = useContext(Context);
  const loadPrompt= async(prompt)=>{
    setRecentPrompts(prompt)
   await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div key={index} onClick={()=>loadPrompt(item)} className="recent-history">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0,18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        {extended && (
          <>
            <div className="bottom-item recent-entry">
              <img src={assets.question_icon} alt="" />
              <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.history_icon} alt="" />
              <p>Activities</p>
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.setting_icon} alt="" />
              <p>Settings</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
