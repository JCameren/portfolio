export const checkLocalStorage = () => {
  if (typeof window !== "undefined" && localStorage.getItem("theme")) {
    return true;
  }
  return false
};
