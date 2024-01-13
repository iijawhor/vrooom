import React, { forwardRef } from "react";

const InputComponent = forwardRef(function InputComponent(
  value,
  onClick,
  className,
  ref,
  ...props
) {
  return (
    <div className="inputComponent">
      <input
        type="text"
        ref={ref}
        onClick={onClick}
        value={value}
        {...props}
        className={`inputComponentInputFiled ${className}`}
      />
    </div>
  );
});

export default InputComponent;
