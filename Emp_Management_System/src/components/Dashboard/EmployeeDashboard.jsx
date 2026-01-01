import React from "react";
import Header from "../../Others/Header";
import TaskListNumbers from "../../Others/TaskListNumbers";
import {
  LogOut,
  ListChecks,
  CircleCheckBig,
  Goal,
  TriangleAlert,
} from "lucide-react";
import AllTasks from "../../Others/AllTasks";
const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1b83a3] to-[#3c4f12] flex items-center justify-center ">
      <div className="min-h-[98vh] w-[98%] bg-gradient-to-t from-purple-950 to-yellow-950 m-2 overflow-auto rounded-3xl ">
        <Header data={props} />
        <TaskListNumbers data={props.data} />
        <AllTasks data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
