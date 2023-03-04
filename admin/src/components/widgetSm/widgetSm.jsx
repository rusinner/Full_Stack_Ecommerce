import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Teo Mav</span>
            <span className="widgetSmUserTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Teo Mav</span>
            <span className="widgetSmUserTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Teo Mav</span>
            <span className="widgetSmUserTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Teo Mav</span>
            <span className="widgetSmUserTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Teo Mav</span>
            <span className="widgetSmUserTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
