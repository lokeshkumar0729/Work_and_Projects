import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div id='over' className=" h-[300px] w-[250px] rounded-2xl p-3 bg-gradient-to-r from-green-600 to-green-950 flex items-center flex-col justify-between">
     <div>
         <div className="flex items-center justify-between ">
          <button className="bg-green-400 px-4 py-1 text-sm text-white font-medium rounded-full ">
            {data.priority}
          </button>
          <h3 className="font-medium text-sm text-white">{data.startDate}</h3>
        </div>
        <h2 className="pt-4 text-3xl font-bold text-white">
         {data.title}
        </h2>
        <h4 className="pt-3 text-sm text-white font-light">
         {data.description}
        </h4>
     </div>
       <div className='w-full'>
         <button className='px-6 py-2 w-full rounded-full bg-[#338834] text-sm mt-10 text-white font-medium'>
         Completed
        </button>
       </div>
      </div>
  )
}

export default CompleteTask
