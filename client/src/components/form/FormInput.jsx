import React from 'react'

const FormInput = ({id, title, type, changeHandler, value, errors, touched, onBlur}) => {
    return (
    <div className="flex flex-col my-2 w-full ">
        <label htmlFor={id} className="text-xs text-gray-800 font-medium">{title}</label>
        <input
            id={id}
            name={id}
            type={type}
            onChange={changeHandler}
            value={value}
            onBlur={onBlur}
            className="bg-gray-800 my-1 p-2 text-cyan-200 text-sm w-full outline-none rounded"
        />
        {errors && touched && <p className="text-red-700 text-xs">{errors}</p>}
    </div>
  )
}

export default FormInput