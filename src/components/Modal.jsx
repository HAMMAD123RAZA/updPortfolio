import React from "react";
import { IoMdClose } from "react-icons/io";

// Modal Component
const Modal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 relative max-w-4xl w-full">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-60"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>
        <div className="w-full">
          <video 
            controls 
            className="w-full max-h-[80vh] object-contain"
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