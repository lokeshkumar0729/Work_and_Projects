import React from "react";
import Header from "../../Others/Header";
import CreateTask from "../../Others/CreateTask";
import History from "../../Others/History";

const AdminDashboard = (props) => {
  return (
    <>
      <div className="min-h-screen min-w-[256px] w-full bg-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <Header data={props} />
          <CreateTask />
        </div>
      </div>

      <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
          <History />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
