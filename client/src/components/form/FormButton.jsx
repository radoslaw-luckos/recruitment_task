import React from 'react'

const FormButton = ({ title, type }) => {
    return (
    <button 
    type={type}
    className="py-2 px-4 text-cyan-200 rounded mt-4 text-sm w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-900 duration-300"
    >
    {title}
    </button>
  )
}

export default FormButton