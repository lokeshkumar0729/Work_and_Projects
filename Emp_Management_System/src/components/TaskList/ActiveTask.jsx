import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const ActiveTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const Accept = () => {
    const updatedEmpData = userData.empdata.map((emp) => {
      let taskAccepted = false;

      const updatedTasks = emp.tasks.map((task) => {
        if (task.taskId === data.taskId) {
          taskAccepted = true;

          return {
            ...task,
            active: false,
            newTask: true,
            status: "started",
          };
        }
        return task;
      });

      return {
        ...emp,
        tasks: updatedTasks,
        taskCount: taskAccepted
          ? {
              ...emp.taskCount,
              newTask: emp.taskCount.newTask - 1,
              active: emp.taskCount.active + 1,
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
    alert("After click 'Accept' please re-login");
  };

  const Deny = () => {
    const updatedEmpData = userData.empdata.map((emp) => {
      let taskDeny = false;

      const updatedTasks = emp.tasks.map((task) => {
        if (task.taskId === data.taskId) {
          taskDeny = true;

          return {
            ...task,
            active: false,
            newTask: false,
            status: "Not started",
          };
        }
        return task;
      });

      return {
        ...emp,
        tasks: updatedTasks,
        taskCount: taskDeny
          ? {
              ...emp.taskCount,
              newTask: emp.taskCount.newTask - 1,
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
    alert("After click 'Deny' please re-login");
  };

  return (
    <div id='over' className=" h-[300px] w-[250px] rounded-2xl p-3 bg-gradient-to-r from-pink-600 to-pink-950 flex flex-col items-center justify-between">
      <div>
        <div className="flex items-center justify-between ">
          <button className="bg-pink-400 px-4 py-1 text-sm text-white font-medium rounded-full ">
            {data.priority}
          </button>
          <h3 className="font-medium text-sm text-white">{data.startDate}</h3>
        </div>
        <h2 className="pt-4 text-3xl font-bold text-white">{data.title}</h2>
        <h4 className="pt-3 text-sm text-white font-light">
          {data.description}
        </h4>
      </div>
      <div className="w-full">
        <div className="flex  items-center  justify-between">
          <button
            onClick={Accept}
            className="px-6 py-2  rounded-full bg-[#04b84cbd] text-sm text-white font-medium"
          >
            Accept
          </button>
          <button
            onClick={Deny}
            className="px-6 py-2  rounded-full bg-[#55434ecc] text-sm text-white font-medium"
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveTask;
