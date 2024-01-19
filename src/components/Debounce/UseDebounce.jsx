import React, { useEffect, useState } from "react";

function UseDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(debounceHandler);
  }, [value, delay]);

  return debounceValue;
}

export default UseDebounce;
