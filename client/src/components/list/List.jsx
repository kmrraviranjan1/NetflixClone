import React from "react";
import "./list.scss";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ListItem from "../listitem/ListItem";
const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlinedIcon />
        <div className="container">
          <ListItem />
        </div>
        <ArrowForwardOutlinedIcon />
      </div>
    </div>
  );
};

export default List;
