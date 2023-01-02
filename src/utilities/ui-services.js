export const checkLocalStorage = () => {
  if (typeof window !== "undefined") {
    const lightThemeActive = localStorage.getItem("theme");
    if (!lightThemeActive) return null;
    return lightThemeActive;
  } else {
    console.log("Currently in the browser")
  }
};
