import React, { forwardRef } from "react";
import "./InputComponent.css";
const InputComponent = forwardRef(function InputComponent(
  { value, onClick, className, onChange, label, ...props },
  ref
) {
  return (
    <div className="inputComponent">
      {label && (
        <label htmlFor="" className="inputComponentLabel">
          {label}
        </label>
      )}
      <input
        className={`inputComponentInputFiled ${className}`}
        type="text"
        ref={ref}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
});

export default InputComponent;
