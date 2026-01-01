import React, { useState, useEffect } from "react";

const App = () => {
  const [Tittle, setTittle] = useState("");
  const [details, setDetails] = useState("");
  const [Task, setTask] = useState(() => {
    const saved = localStorage.getItem("Tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(Task));
  }, [Task]);

  const submithandler = (e) => {
    e.preventDefault();

    setTask((prev) => [{ Tittle, details }, ...prev]);

    setTittle("");
    setDetails("");
  };

  return (
    <div className="h-screen w-full lg:flex bg-black text-white">
      <form
        onSubmit={submithandler}
        className="flex items-start flex-col lg:w-1/2 p-10 gap-4"
      >
        <h1 className="text-3xl font-bold ">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 font-medium outline-none rounded-xl"
          value={Tittle}
          onChange={(e) => {
            setTittle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Enter Details"
          className="px-5 h-32 py-2 border-2 w-full font-medium outline-none rounded-xl"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white cursor-pointer text-black outline-none p-5 w-full rounded-2xl font-bold transition-all duration-75 active:scale-90 active:shadow-inner active:shadow-black/30">
          Add Note
        </button>
      </form>
      <div className=" bg-gray-900  lg:w-1/2  p-10">
        <h1 className="font-bold text-3xl">Recent Notes</h1>
        <div className="flex flex-wrap gap-x-5 mt-5 h-full scrollbar-hide overflow-auto">
          {Task.map((elem, index) => {
            return (
              <div
                key={index}
                className="flex flex-col h-52 w-60 bg-cover text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] rounded-2xl overflow-auto p-5 scrollbar-hide"
              >
                <div className="flex flex-col gap-4 grow ">
                  <h2 className="font-bold text-2xl leading-tight">
                    {elem.Tittle}
                  </h2>
                  <p className="leading-tight">{elem.details}</p>
                </div>

                <button
                  className="self-end py-2 px-3 text-sm bg-red-500 rounded-full text-white cursor-pointer active:scale-95cle"
                  onClick={() => {
                    const newTasks = Task.filter((_, i) => i !== index);
                    setTask(newTasks);
                  }}
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
