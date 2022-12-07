import React from "react";

const Loading = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Loading;
