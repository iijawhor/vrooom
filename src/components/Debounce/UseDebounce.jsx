import React, { useEffect, useState } from "react";

function UseDebounce({ currentLocation, enterDestination }, delay) {
  const [debounceValue, setDebounceValue] = useState({
    currentLocation: "",
    enterDestination: ""
  });

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue({ currentLocation, enterDestination });
    }, delay);
    return () => clearTimeout(debounceHandler);
  }, [debounceValue, delay]);

  return debounceValue;
}

export default UseDebounce;
