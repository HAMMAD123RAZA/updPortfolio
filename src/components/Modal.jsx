import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg p-4 sm:p-6 relative w-full max-w-4xl mx-4 sm:mx-0">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
          onClick={onClose}
        >
          <IoMdClose size={32} />
        </button>
        <div className="w-full h-full flex items-center justify-center">
          <video
            controls
            className="w-full max-w-full h-auto max-h-[50vh] sm:max-h-[75vh] object-contain"
            autoPlay
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Modal;