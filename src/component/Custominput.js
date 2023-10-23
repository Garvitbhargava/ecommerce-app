import React from 'react'

const Custominput = (props) => {
    const {type,name,placeholder,className,value,onChange,onBlur,disabled}=props
  return (
    <div>
    <input 
    type={type}
    name={name}
    placeholder={placeholder}
    className={`form-control ${className}`}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    disabled={disabled}
    >
      </input>  
  </div>
  )
}

export default Custominput