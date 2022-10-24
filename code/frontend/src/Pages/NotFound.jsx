import React, {useState} from "react";
import KanbanBoard from "../Components/Kanban";
import Header from "../Components/Layout/Header";
import SideBar from "../Components/Layout/SideBar";
import "./index.css";


const NotFound = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <div className="min-h-0 flex-1 flex overflow-hidden">
        <SideBar></SideBar>
        <KanbanBoard></KanbanBoard>
      </div>
    </div>
  );
};

export default NotFound;
