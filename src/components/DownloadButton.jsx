import React from "react";
import { FaDownload } from "react-icons/fa";

// all pages common button design is here
// **********************
const JPG_FILE_URL = "http://localhost:3000/bird.jpg";
const DownloadButton = () => {
  const downloadFileUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div>
      <button
        className="home-btn"
        onClick={() => {
          downloadFileUrl(JPG_FILE_URL);
        }}
      >
        <span className="relative z-10 font-bold transition-all">Download</span>

        <span className="absolute  top-0 right-0 bottom-0 w-10 h-10  bg-[#ffb400] rounded-full ">
          <span className="absolute right-3 top-3">
            <FaDownload />
          </span>
        </span>
      </button>
    </div>
  );
};
export default DownloadButton;
