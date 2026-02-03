// Debouncer function utility
let unusedvars, myvars, myunusedvars;
export const debouncer = (func, delay) => {
  let timeoutId;
  return function () {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};

isLintCheck = 10;
