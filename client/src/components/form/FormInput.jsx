import React from 'react'

const FormInput = ({id, title, type, changeHandler, value}) => {
    return (
    <div className="flex flex-col my-2 w-full ">
        <label htmlFor={id} className="text-xs text-gray-800 font-medium">{title}</label>
        <input
            id={id}
            name={id}
            type={type}
            onChange={changeHandler}
            value={value}
            className="bg-gray-800 text-center my-1 p-2 text-cyan-200 text-sm w-full outline-none w-full rounded"
        />
    </div>
  )
}

export default FormInput