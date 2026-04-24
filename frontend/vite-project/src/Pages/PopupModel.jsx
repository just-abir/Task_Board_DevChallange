import React from "react";
import timmer from "../resources/Time_atack_duotone.svg";
import doneBtn from "../resources/Done_round_duotone.svg";
import closeRing from "../resources/close_ring_duotone.svg";
import trash from "../resources/Trash.svg";
import done from "../resources/Done_round.svg";
import { useTask } from "../hooks/useTask";

const PopupModel = ({
  popupModal,
  setPopupShow,
  PopupShow,
  SelectTask,
  boardId,
  fetchBoardById,
}) => {
  const {
    taskName,
    setTaskName,
    taskDescription,
    setTaskDescription,
    taskIcon,
    setTaskIcon,
    taskStatus,
    setTaskStatus,
    isMobile,
    statusLabel,
    IconsofTask,
    saveBtn,
    deleteBtn,
  } = useTask(SelectTask);

  const onClose = () => {
    setPopupShow(false);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 h-screen w-screen z-40"
      ></div>
      <div
        onClick={onClose}
        className={
          isMobile
            ? "fixed inset-0 flex items-center justify-center z-50"
            : "fixed top-0 right-0 h-screen md:w-[60%] w-[45%] overflow-y-auto z-50"
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            isMobile
              ? "bg-white w-[90%] max-h-[95vh] rounded-2xl overflow-y-auto px-4 py-5"
              : "bg-white h-full px-3 py-5"
          }
        >
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold font-outfit">Task Details </p>
            <p
              onClick={onClose}
              className="text-red-500 font-bold text-2xl cursor-pointer"
            >
              X
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 font-outfit">
              Task name
            </p>
            <input
              className="w-full border-2 border-gray-400 py-2 px-2 text-base font-outfit"
              type="text"
              name=""
              id=""
              placeholder=""
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 font-outfit">
              Description
            </p>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              name=""
              id=""
              placeholder="Enter a short description"
              className="w-full h-[350px] border-2 border-gray-400 p-2 text-base font-outfit"
            ></textarea>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 font-outfit mb-3">
              Icon
            </p>
            <div className="flex justify-start items-center gap-3 flex-wrap">
              {IconsofTask.map((iconObj, id) => {
                return (
                  <div
                    onClick={() => setTaskIcon(iconObj.name)}
                    key={id}
                    className={`p-3 rounded-2xl text-4xl cursor-pointer transition-all ${
                      taskIcon === iconObj.name
                        ? "bg-blue-500 border-4 border-blue-700 scale-110"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {iconObj.emoji}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-sm font-medium text-gray-500 font-outfit mt-4 mb-3">
            Status
          </p>

          <div className="grid grid-cols-2 gap-2">
            {statusLabel.map((label, index) => {
              let badgeBg = "#F6D565";
              let iconSrc = timmer;
              let borderColor = "border-gray-300";

              if (label === "Completed") {
                badgeBg = "#A0ECB1";
                iconSrc = doneBtn;
              } else if (label === "Won't Do") {
                badgeBg = "#F7D4D3";
                iconSrc = closeRing;
              }

              if (taskStatus === label) {
                borderColor = "border-blue-500 border-4";
              }

              return (
                <div
                  key={index}
                  onClick={() => setTaskStatus(label)}
                  style={{ backgroundColor: badgeBg }}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl cursor-pointer transition-all border-2 ${borderColor} hover:shadow-md`}
                >
                  <img src={iconSrc} className="h-6 w-6" alt={label} />
                  <p className="text-xs font-semibold text-gray-700 text-center">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end items-center gap-5 ">
            <p
              onClick={deleteBtn}
              className="py-2 px-4 rounded-2xl bg-gray-500 flex justify-between items-center gap-3"
            >
              Delete{" "}
              <span>
                <img src={trash} alt="" />
              </span>{" "}
            </p>
            <p
              onClick={saveBtn}
              className="py-2 px-4 rounded-2xl bg-gray-500 flex justify-between items-center gap-3"
            >
              Save{" "}
              <span>
                <img src={done} alt="" />
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupModel;
