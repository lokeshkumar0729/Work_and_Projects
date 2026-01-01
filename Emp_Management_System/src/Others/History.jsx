import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const History = () => {
  const [userData] = useContext(AuthContext);
  const gridCols = "grid grid-cols-5 items-center text-center";

  return (
    <div className="min-h-screen bg-gradient-to-t from-rose-300 to-fuchsia-900 flex flex-col gap-7 p-6">
      <h2 className="text-white text-2xl font-medium flex justify-center">
        Employee's Overview
      </h2>

      <div className="rounded-2xl bg-gradient-to-r from-yellow-400 to-sky-400 p-4">
        <div
          className={`${gridCols} font-semibold text-xs sm:text-sm md:text-base`}
        >
          <div>Employee Name</div>
          <div>New Task</div>
          <div>Active</div>
          <div>Completed</div>
          <div>Failed</div>
        </div>
      </div>

      {userData?.empdata?.map((emp) => (
        <div
          key={emp.id}
          className="rounded-2xl bg-gradient-to-r from-teal-800 to-purple-600 p-4"
        >
          <div className={`${gridCols} text-white text-sm font-medium`}>
            <div className="truncate">{emp.name}</div>
            <div>{emp.taskCount.newTask}</div>
            <div>{emp.taskCount.active}</div>
            <div>{emp.taskCount.completed}</div>
            <div>{emp.taskCount.failed}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
