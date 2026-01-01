import React, { useContext, useState } from "react";
import CompleteTask from "../components/TaskList/CompleteTask";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userdata, setUserData] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [assign, setAssign] = useState("");
  const [priority, setPriority] = useState("High");
  const [created, setCreated] = useState("");
  const [division, setDivision] = useState("");
  const [taskStatus, setTaskStatus] = useState("Not Started");
  const [description, setDescription] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [group, setGroup] = useState("Not Started");
  const [startDate, setStartDate] = useState("");
  const [duedate, setDueDate] = useState("");
  const [newTask, setNewtask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskId: Date.now(), // important
      title,
      description,
      startDate,
      duedate,
      group,
      percentage,
      division,
      created,
      priority,
      active: true,
      newTask: false,
      completed: false,
      failed: false,
    };

    const data = userdata.empdata;

    const updatedData = data.map((emp) => {
      if (emp.name === assign) {
        return {
          ...emp,
          tasks: [...(emp.tasks || []), task],
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.active + 1,
          },
        };
      }
      return emp;
    });

    setUserData((prev) => ({
      ...prev,
      empdata: updatedData,
    }));
    localStorage.setItem("employee", JSON.stringify(updatedData));
    console.log(updatedData);
    // reset form
    setTitle("");
    setAssign("");
    setPriority("");
    setCreated("");
    setDivision("");
    setTaskStatus("");
    setDescription("");
    setPercentage(0);
    setGroup("");
    setStartDate("");
    setDueDate("");
  };

  const Cancle = () => {
    setTitle("");
    setAssign("");
    setPriority("");
    setCreated("");
    setDivision("");
    setTaskStatus("");
    setDescription("");
    setPercentage(0);
    setGroup("");
    setStartDate("");
    setDueDate("");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create Task</h1>

      {/* Form Card */}
      <div className="bg-gray-50 rounded-xl p-6">
        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter title"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assign To
            </label>
            <input
              value={assign}
              onChange={(e) => {
                setAssign(e.target.value);
              }}
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            >
              <option>High</option>
              <option>Moderate</option>
              <option>Low</option>
            </select>
          </div>

          {/* Created By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Created By
            </label>
            <input
              value={created}
              onChange={(e) => {
                setCreated(e.target.value);
              }}
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          {/* Division */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Division
            </label>
            <input
              value={division}
              onChange={(e) => {
                setDivision(e.target.value);
              }}
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          {/* Task Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Status
            </label>
            <select
              value={taskStatus}
              onChange={(e) => {
                setTaskStatus(e.target.value);
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            >
              <option>Not Started</option>
              <option>Started</option>
            </select>
          </div>

          {/* Description (Full Width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows="4"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none"
              placeholder="Describe the task..."
            ></textarea>
          </div>

          {/* % Complete */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {percentage} % Complete
            </label>
            <input
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => {
                setPercentage(e.target.value);
                console.log(percentage);
              }}
              type="range"
              className="w-full"
            />
          </div>

          {/* Group */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Group
            </label>
            <select
              value={group}
              onChange={(e) => {
                setGroup(e.target.value);
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            >
              <option>Not Started</option>
              <option>Started</option>
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              type="date"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              value={duedate}
              onChange={(e) => {
                setDueDate(e.target.value);
              }}
              type="date"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              onClick={Cancle}
              type="button"
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
