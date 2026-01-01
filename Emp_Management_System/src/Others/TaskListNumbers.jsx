import React from "react";
import { ListChecks, CircleCheckBig, Goal, TriangleAlert } from "lucide-react";
const TaskListNumbers = ({ data }) => {
  return (
    <div className="h-45 bg-gradient-to-r from-purple-300 to-gray-900 p-2 items-center flex flex-col justify-around overflow-auto m-5 rounded-2xl">
      <h3 className="font-semibold text-white">Task Overview</h3>
      <div
        id="tasks"
        className="flex flex-wrap overflow-auto gap-5 justify-around items-center"
      >
        <div className="h-25 w-60 shrink-0 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-900">
          <div className="flex items-center justify-between p-1">
            <ListChecks
              color="#ffffff"
              strokeWidth={1.75}
              size={25}
              className="pl-2"
            />
            <h6 className="text-[10px] bg-pink-700 mr-2 text-white px-[4px] py-[2px] rounded-full">
              Newly Added
            </h6>
          </div>
          <h2 className="font-bold text-white pl-4 text-md mb-2 mt-1 self-start">
            {data.taskCount.newTask}
          </h2>
          <h5 className="text-sm font-medium pl-4 text-white ">New Tasks</h5>
        </div>
        <div className="h-25 w-60 bg-gradient-to-r rounded-2xl from-green-500 to-green-900">
          <div className="flex items-center justify-between p-1">
            <CircleCheckBig
              color="#ffffff"
              strokeWidth={1.75}
              size={25}
              className="pl-2"
            />

            <h6 className="text-[10px] bg-green-700 mr-2 text-white px-[4px] py-[2px] rounded-full">
              Finished
            </h6>
          </div>
          <h2 className="font-bold text-white pl-4 text-md mb-2 mt-1 self-start">
            {data.taskCount.completed}
          </h2>
          <h5 className="text-sm font-medium pl-4 text-white ">
            Completed Tasks
          </h5>
        </div>
        <div className="h-25 w-60 bg-gradient-to-r rounded-2xl from-blue-500 to-blue-900">
          <div className="flex items-center justify-between p-1">
            <Goal
              size={23}
              color="#ffffff"
              strokeWidth={1.75}
              className="pl-2"
            />
            <h6 className="text-[10px] bg-blue-700 mr-2 text-white px-[4px] py-[2px] rounded-full">
              Ongoing
            </h6>
          </div>
          <h2 className="font-bold text-white pl-4 text-md mb-2 mt-1 self-start">
            {data.taskCount.active}
          </h2>
          <h5 className="text-sm font-medium pl-4 text-white ">Active Tasks</h5>
        </div>
        <div className="h-25 w-60 bg-gradient-to-r rounded-2xl from-red-500 to-red-900">
          <div className="flex items-center justify-between p-1">
            <TriangleAlert
              size={23}
              color="#ffffff"
              strokeWidth={1.75}
              className="pl-2"
            />
            <h6 className="text-[10px] bg-red-700 mr-2 text-white px-[4px] py-[2px] rounded-full">
              Needs Review
            </h6>
          </div>
          <h2 className="font-bold text-white pl-4 text-md mb-2 mt-1 self-start">
            {data.taskCount.failed}
          </h2>
          <h5 className="text-sm font-medium pl-4 text-white ">Failed Tasks</h5>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;
