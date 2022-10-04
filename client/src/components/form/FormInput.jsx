import React from 'react'

const FormInput = ({id, title, type, changeHandler, value}) => {
    return (
    <div className="flex flex-col my-2">
        <label htmlFor={id}>{title}</label>
        <input
            id={id}
            name={id}
            type={type}
            onChange={changeHandler}
            value={value}
        />
    </div>
  )
}

export default FormInput