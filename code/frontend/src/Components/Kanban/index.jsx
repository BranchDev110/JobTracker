import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { faEllipsisH, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const mockData = [
  {
    id: "section1",
    title: "APPLIED",
    item: [
      {
        id: "job1",
        title: "Senior Front End Engineer",
        company: "moontek",
        url: "moontek.io",
      },
      {
        id: "job2",
        title: "Senior Front End Engineer",
        company: "moontek",
        url: "gurutechnolabs.com",
      },
      {
        id: "job3",
        title: "Senior Front End Engineer",
        company: "moontek",
        url: "icrossing.com",
      },
    ],
  },
  {
    id: "section2",
    title: "INTRO",
    item: [
      {
        id: "job4",
        title: "Senior Front End Engineer",
        company: "moontek",
        url: "sunriseintegration.com",
      },
      {
        id: "job5",
        title: "Senior Front End Engineer",
        company: "moontek",
        url: "moontek.io",
      },
      {
        id: "job6",
        title: "Senior Front End Engineer",
        company: "moontek",
        url: "moontek.io",
      },
    ],
  },
];
const KanbanBoard = () => {
  const [data, setData] = useState(mockData);
  const onDragEnd = async ({ source, destination }) => {
    if (!destination) return;
    const newData = [...data];
    const sourceColIndex = newData.findIndex(
      (e) => e.id === source.droppableId
    );
    const destinationColIndex = newData.findIndex(
      (e) => e.id === destination.droppableId
    );
    const sourceCol = newData[sourceColIndex];
    const destinationCol = newData[destinationColIndex];

    const sourceTasks = [...sourceCol.item];
    const destinationTasks = [...destinationCol.item];

    if (source.droppableId !== destination.droppableId) {
      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);
      newData[sourceColIndex].item = sourceTasks;
      newData[destinationColIndex].item = destinationTasks;
    } else {
      const [removed] = destinationTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);
      newData[destinationColIndex].item = destinationTasks;
    }

    setData(newData);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.map((section) => (
          <div key={section.id} className="flex flex-col border-x p-2 w-80">
            <div className="flex flex-col py-5">
              <div className="section-info flex items-center justify-between p-2">
                <div className="text-gray-300 text-xl font-normal">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="text-gray-800 text-lg font-normal">
                  <p>{section.title}</p>
                </div>
                <div className="text-gray-400">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border px-5 py-1 text-xl font-medium text-gray-500 shadow-sm hover:shadow-md"
              >
                +
              </a>
            </div>
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {section.item.map((job, index) => (
                    <Draggable key={job.id} draggableId={job.id} index={index}>
                      {(provided) => (
                        <div
                          className="py-2 select-none"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="flex p-3 bg-sky-500 rounded space-x-2">
                            <div className="job-image bg-white rounded-full w-10 h-10 flex items-center justify-center">
                              <img
                                className="rounded-full"
                                src={`https://logo.clearbit.com/${job.url}`}
                                width="40px"
                                height="40px"
                              />
                            </div>
                            <div className="job-desc text-white flex-1 space-y-0.5">
                              <p className="text font-medium">{job.title}</p>
                              <p className="text-sm font-normal">
                                {job.company} - Information Technology
                              </p>
                              <p className="text-xs font-normal text-gray-300">
                                Full Time - Mid Senior Level
                              </p>
                              <p className="text-xs font-normal text-gray-300">
                                Salary - ($140k - $160k)/yr
                              </p>
                              <div className="flex justify-between pt-2">
                                <div className="flex -space-x-1">
                                  <img
                                    className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                  />
                                  <img
                                    className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                  />
                                  <img
                                    className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt=""
                                  />
                                  <img
                                    className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                  />
                                </div>

                                <p className="text-xs font-normal">
                                  2 Days Ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </>
  );
};

export default KanbanBoard;
