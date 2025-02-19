import React from 'react'

const Modal = ({ title, children, isOpen, onClose }) => {
    if (!isOpen) return null
  return (
      <div className='fixed top-0 left-0 w-full h-full z-50 bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
          <div className='bg-[#1a1a1a] rounded-lg p-5 w-96'>
              <div className='flex justify-between items-center'>
                  <h1>{ title }</h1>
                  <button onClick={onClose} className='text-red-500'>X</button>
              </div>
              { children }
          </div>
          
    </div>
  )
}

export default Modal