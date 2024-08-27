// import { ReactDOM } from "react";

import React from "react";

const Loader = () => {
  return (
    <div className="grid w-full h-full place-items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="rounded-full border-[5px] border-slate-300 border-t-color_danger w-10 h-10 animate-spin"></span>
        <span className="font-semibold">Loading...</span>
      </div>
    </div>
    // document.getElementById("Loader")
  );
};

export default Loader;
