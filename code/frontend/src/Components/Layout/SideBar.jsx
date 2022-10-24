import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faCalendar, faChartLine, faEnvelope, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
      <nav
        aria-label="Sidebar"
        className="narrow-sidebar hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto lg:border-r"
      >
        <div className="relative w-80 flex space-y-5 flex-col p-2 pt-8">
          <a href="#" className="flex hover:bg-gray-100 hover:text-gray-700 py-3 px-6">
            <div className="text-xl w-8 text-gray-500">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="text-center text-lg font-normal text-gray-700">Dashboard</div>
          </a>
          <a href="#" className="flex hover:bg-gray-100 hover:text-gray-700 py-3 px-6">
            <div className="text-xl w-8 text-gray-500">
              <FontAwesomeIcon icon={faArchive} />
            </div>
            <div className="text-center text-lg font-normal text-gray-700">JobBoards</div>
          </a>
          <a href="#" className="flex hover:bg-gray-100 hover:text-gray-700 py-3 px-6">
            <div className="text-xl w-8 text-gray-500">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <div className="text-center text-lg font-normal text-gray-700">Friends</div>
          </a>
          <a href="#" className="flex hover:bg-gray-100 hover:text-gray-700 py-3 px-6">
            <div className="text-xl w-8 text-gray-500">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className="text-center text-lg font-normal text-gray-700">Calendar</div>
          </a>
        </div>
      </nav>
  );
};

export default SideBar;
