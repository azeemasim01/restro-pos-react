import React from "react";

const Modal = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
      <div className="bg-[#1a1a1a] rounded-lg p-5 w-96">
        <div className="flex justify-between items-center">
          <h1>{title}</h1>
          {/* close button */}
          <button onClick={onClose} className="text-red-500">
            &#10005;
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
