import React from "react";
import ActiveTask from "../components/TaskList/ActiveTask";
import CompleteTask from "../components/TaskList/CompleteTask";
import FailedTask from "../components/TaskList/FailedTask";
import NewTask from "../components/TaskList/NewTask";

const AllTasks = ({ data }) => {
  return (
    <div
      id="data"
      className="w-[97%] h-[400px] shrink-0 justify-center flex-wrap items-center mt-10 gap-6 flex h-[50%] overflow-auto p-10 bg-gradient-to-t from-indigo-600 to-rose-100 m-5 rounded-2xl"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.active) {
          return <ActiveTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default AllTasks;
