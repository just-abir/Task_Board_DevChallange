import React, { useState } from "react";
import { useBoard } from "./hooks/useBoard";
import logo from "./resources/logo.svg";
import edit from "./resources/Edit_duotone.svg";
import timmer from "./resources/Time_atack_duotone.svg";
import addBtn from "./resources/Add_round_duotone.svg";
import doneBtn from "./resources/Done_round_duotone.svg";
import closeRing from "./resources/close_ring_duotone.svg";
import PopupModel from "./Pages/PopupModel";

// Helper function to convert icon name to emoji
const getIconEmoji = (iconName) => {
  const iconMap = {
    icon1: "🎯",
    icon2: "⚡",
    icon3: "⭐",
    icon4: "🚀",
  };
  return iconMap[iconName] || "🎯";
};

// Helper function to get status icon
const getStatusIcon = (status) => {
  const statusIconMap = {
    "In Progress": timmer,
    Completed: doneBtn,
    "Won't Do": closeRing,
  };
  return statusIconMap[status] || timmer;
};

// Helper function to get status background color
const getStatusBgColor = (status) => {
  const statusColorMap = {
    "In Progress": "#F6D565",
    Completed: "#A0ECB1",
    "Won't Do": "#F7D4D3",
  };
  return statusColorMap[status] || "#F6D565";
};

// Helper function to get darker icon background color
const getStatusIconBgColor = (status) => {
  const statusIconColorMap = {
    "In Progress": "#E8A93F",
    Completed: "#5DB36B",
    "Won't Do": "#E97878",
  };
  return statusIconColorMap[status] || "#E8A93F";
};

// Helper function to get status label for badge
const getStatusLabel = (status) => {
  return status || "In Progress";
};

const App = () => {
  const {
    editeBoard,
    setediteBoard,
    PopupShow,
    setPopupShow,
    boardId,
    boardName,
    setBoardName,
    tasks,
    boardDescription,
    setboardDescription,
    SelectTask,
    setSelectTask,
    popupModal,
    clkTask,
    handleUpdateBoard,
    handleDeleteBoard,
    fetchBoardById,
  } = useBoard();

  return (
    <div className=" h-[90vh] max-w-full sm:max-w-[80vw] mx-auto my-[0vh] md:my-[5vh] relative ">
      <div className=" h-[96%] max-w-full sm:max-w-[90%] md:max-w-[70%] mx-auto my-[2%] flex  flex-col overflow-y-auto ">
        <div className=" mb-6">
          <div className="flex justify-start items-center gap-2 sm:gap-3 md:gap-4 py-2 md:py-4">
            <span>
              <img src={logo} alt="" />{" "}
            </span>
            {editeBoard ? (
              <input
                className="text-2xl font-semibold border px-2 font-outfit text-center"
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
              />
            ) : (
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-outfit">
                {boardName}
              </h1>
            )}
            {editeBoard ? (
              <button
                onClick={handleUpdateBoard}
                className="px-3 py-1 bg-blue-500 text-white rounded font-outfit text-sm font-medium"
              >
                Save
              </button>
            ) : (
              <img
                onClick={() => setediteBoard(true)}
                src={edit}
                alt="edit"
                className="cursor-pointer"
              />
            )}
          </div>
          {/*  */}
          {editeBoard ? (
            <input
              value={boardDescription}
              onChange={(e) => setboardDescription(e.target.value)}
              className="border font-outfit text-sm mx-auto"
            />
          ) : (
            <p className="text-sm sm:text-base font-normal font-outfit">
              {boardDescription}
            </p>
          )}
        </div>
        {}
        {tasks.map((elem, id) => {
          let bgColor = "#F6D565"; // Default yellow (In Progress)
          if (elem.taskStatus === "Completed") {
            bgColor = "#A0ECB1"; // Green
          } else if (elem.taskStatus === "Won't Do") {
            bgColor = "#F7D4D3"; // Red
          }

          return (
            <div
              onClick={() => clkTask(elem)}
              key={elem._id}
              style={{ backgroundColor: bgColor }}
              className="my-3  py-3 sm:py-5 md:py-8 rounded-2xl"
            >
              <div className="flex justify-between items-center mx-3">
                <div className=" flex justify-center gap-1 sm:gap-3 md:gap-5 items-center">
                  <p className="bg-white p-2 sm:p-4 rounded-2xl">
                    <span className="text-lg sm:text-2xl">
                      {getIconEmoji(elem.taskIcon)}
                    </span>
                  </p>
                  <p className="text-base sm:text-lg font-semibold font-outfit">
                    {elem.taskName}
                  </p>
                </div>
                <span
                  style={{ backgroundColor: getStatusBgColor(elem.taskStatus) }}
                  className="p-2 sm:p-4 rounded-2xl flex items-center justify-center"
                >
                  <div
                    style={{
                      backgroundColor: getStatusIconBgColor(elem.taskStatus),
                    }}
                    className="p-2 sm:p-3 rounded-lg flex items-center justify-center"
                  >
                    <img
                      src={getStatusIcon(elem.taskStatus)}
                      className="h-6 w-6"
                      alt={elem.taskStatus}
                    />
                  </div>
                </span>
              </div>
            </div>
          );
        })}
        <div
          onClick={popupModal}
          style={{ backgroundColor: "#E3EBEF" }}
          className="my-3  py-3 sm:py-5 md:py-8 rounded-2xl"
        >
          <div className="flex justify-between items-center mx-3">
            <div className=" flex justify-center gap-1 sm:gap-3 md:gap-5 items-center">
              <p className="bg-amber-700 p-2 sm:p-4 rounded-2xl">
                {" "}
                <img src={addBtn} alt="" />
              </p>
              <p className=" text-lg sm:text-2xl font-bold">Add New Task</p>
            </div>
          </div>
        </div>
        {PopupShow && (
          <PopupModel
            popupModal={popupModal}
            setPopupShow={setPopupShow}
            PopupShow={PopupShow}
            SelectTask={SelectTask}
            boardId={boardId}
            fetchBoardById={fetchBoardById}
          />
        )}{" "}
      </div>
    </div>
  );
};
export default App;
