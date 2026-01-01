import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=30`
      );
      setData(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, [index]);

  return (
    <>
      {loading && (
        <h3 className="text-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">
          Loading...
        </h3>
      )}

      <div className="flex flex-wrap  gap-4 p-4">
        {!loading &&
          data.map((elem) => (
           <a href={elem.url} target="_blank">
             <div
              key={elem.id}
              className="flex flex-col w-48 bg-white p-2 rounded shadow"
            >
              <img
                src={elem.download_url}
                alt={elem.author}
                className="h-32 object-cover rounded"
              />
              <h2 className="text-center font-semibold mt-2">
                {elem.author}
              </h2>
            </div>
           </a>
          ))}
      </div>

      <div className="flex items-center justify-center gap-5">
        <button
          disabled={index === 1 || loading}
          onClick={() => setIndex(index - 1)}
          className="bg-red-500 disabled:opacity-50 px-5 py-2 mb-5 active:scale-95 rounded cursor-pointer text-md font-semibold"
        >
          Prev
        </button>
              <h3 className="mb-5 py-2 px-5 text-lg font-semibold text-gray-600">Page {index}</h3>
        <button
          disabled={loading}
          onClick={() => setIndex(index + 1)}
          className="bg-red-500 disabled:opacity-50 px-5 py-2 mb-5 active:scale-95 cursor-pointer rounded text-md font-semibold"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;
