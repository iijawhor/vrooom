const UseDebounce = (callback, delay) => {
  let timeout;
  if (timeout) clearTimeout(timeout);
  return function (...args) {
    setTimeout(() => {
      callback();
    }, delay);
  };
};
export default UseDebounce;
