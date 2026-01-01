import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const complete = () => {
    const updatedEmpData = userData.empdata.map((emp) => {
      let taskCompleted = false;

      const updatedTasks = emp.tasks.map((task) => {
        if (task.taskId === data.taskId) {
          taskCompleted = true;

          return {
            ...task,
            active: false,
            newTask: false,
            completed: true,
            status: "started",
          };
        }
        return task;
      });

      return {
        ...emp,
        tasks: updatedTasks,
        taskCount: taskCompleted
          ? {
              ...emp.taskCount,
              active: emp.taskCount.active - 1,
              completed: emp.taskCount.completed + 1,
            }
          : emp.taskCount,
      };
    });

    console.log(updatedEmpData);

    setUserData((prev) => ({
      ...prev,
      empdata: updatedEmpData,
    }));

    localStorage.setItem("employee", JSON.stringify(updatedEmpData));
    window.location.reload();
    alert("After click 'Marks as completed' please re-login");
  };

  const failed = () => {
    const updatedEmpData = userData.empdata.map((emp) => {
      let taskFailed = false;

      const updatedTasks = emp.tasks.map((task) => {
        if (task.taskId === data.taskId) {
          taskFailed = true;

          return {
            ...task,
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            status: "started",
          };
        }
        return task;
      });

      return {
        ...emp,
        tasks: updatedTasks,
        taskCount: taskFailed
          ? {
              ...emp.taskCount,
              failed: emp.taskCount.failed + 1,
              active: emp.taskCount.active - 1,
            }
          : emp.taskCount,
      };
    });

    console.log(updatedEmpData);

    setUserData((prev) => ({
      ...prev,
      empdata: updatedEmpData,
    }));

    localStorage.setItem("employee", JSON.stringify(updatedEmpData));
    window.location.reload();
    alert("After click 'Mark as failed' please re-login");
  };

  return (
    <div id='over' className=" h-[300px] w-[250px] rounded-2xl p-3 overflow-auto bg-gradient-to-r from-blue-600 to-sky-950 flex flex-col items-center justify-between">
      <div>
        <div className="flex items-center justify-between ">
          <button className="bg-blue-400 px-4 py-1 text-sm text-white font-medium rounded-full ">
            {data.priority}
          </button>
          <h3 className="font-medium text-sm text-white">{data.startDate}</h3>
        </div>
        <h2 className="pt-4 text-3xl font-bold text-white">{data.title}</h2>
        <h4 className="pt-3 text-sm text-white font-light">
          {data.description}
        </h4>
      </div>
      <div className="w-full flex flex-col items-center justify-evenly">
        <button
          onClick={complete}
          className="px-6 py-2 w-full rounded-full bg-[#21c900] text-sm mt-10 text-white font-medium"
        >
          Mark as Completed
        </button>
        <button
          onClick={failed}
          className="px-6 py-2 w-full rounded-full bg-[#db0909] text-sm mt-10 text-white font-medium"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default NewTask;
